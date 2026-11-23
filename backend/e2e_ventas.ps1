function Req([switch]$Fn, [string]$Method, [string]$Url, [string]$File, [string]$Token) {
  $args = @('-sS')
  if ($Fn) { }
  if ($File) { $args += '-X', $Method, '-H', "Authorization: Bearer $Token", '-H', 'Content-Type: application/json', '--data-binary', "@$env:TEMP\e2e_payload.json" }
  else { $args += '-X', $Method }
  $args += $Url
  $r = & curl.exe $args | ConvertFromJson -ErrorAction SilentlyContinue
  return $r
}

function W([string]$t, [object]$v) { Write-Host $t; if ($v) { Write-Host "  $v" } }

$login = curl.exe -sS -X POST http://localhost:5000/api/auth/login -H 'Content-Type: application/json' --data-binary "@$env:TEMP\login.json" | ConvertFrom-Json
$token = $login.token

Write-Host '=== 1. OrdersProductivo ==='
$ord = curl.exe -sS http://localhost:5000/api/orders/admin/all -H "Authorization: Bearer $token" | ConvertFrom-Json
$c = $ord | Where-Object { $_.customerName -eq 'Carlos Mendoza' }
Write-Host "orden $($c.orderNumber): primeraVisita=$($c.primeraVisita), canalesId=$($c.canalesId), channelName=$($c.channelName), tqsItems=$($c.tqsItems), totalVentas=$($c.totalVentas)"

Write-Host '=== 2. Canales CRUD ==='
Set-Content -Path "$env:TEMP\e2e_payload.json" -Value '{"nombre":"Google Ads","tipo":"Otros","descripcion":"Avisos en Google"}' -Encoding ascii
$c1 = curl.exe -sS -X POST http://localhost:5000/api/canales -H "Authorization: Bearer $token" -H 'Content-Type: application/json' --data-binary "@$env:TEMP\e2e_payload.json" | ConvertFrom-Json
Write-Host "create: $($c1.message) -> id=$($c1.canal.id)"
$c1b = curl.exe -sS -X DELETE "http://localhost:5000/api/canales/$($c1.canal.id)" -H "Authorization: Bearer $token" | ConvertFrom-Json
Write-Host "delete: $($c1b.message)"

Write-Host '=== 3. Clientes CRUD + Lifecycle ==='
$cll = curl.exe -sS http://localhost:5000/api/clientes/ -H "Authorization: Bearer $token" | ConvertFrom-Json
foreach ($cl in $cll) { Write-Host "  $($cl.nombre): status=$($cl.status) score=$($cl.scoreVentas) tqs=$($cl.tqs) total=$($cl.totalVentas)" }
$cid = $cll[0].id
$cstats = curl.exe -sS "http://localhost:5000/api/clientes/$cid/stats" -H "Authorization: Bearer $token" | ConvertFrom-Json
Write-Host "stats cliente: ordersCount=$($cstats.client.ordersCount) totalVentas=$($cstats.client.totalVentas) status=$($cstats.client.status) tqs=$($cstats.client.tqs) score=$($cstats.client.scoreVentas)"

Write-Host '=== 4. Validación Stock en OrdersProductivo (409) ==='
Set-Content -Path "$env:TEMP\e2e_payload.json" -Value '{"items":[{"productId":"prod-3d-robot","name":"Robot","category":"Impresión 3D","material":"PLA","color":"Negro","price":10000,"quantity":1}],"customerEmail":"laura.cifuentes@correo.com","channelId":"cnal-api"}' -Encoding ascii
$err = curl.exe -sS -X POST http://localhost:5000/api/orders/ -H "Authorization: Bearer $token" -H 'Content-Type: application/json' --data-binary "@$env:TEMP\e2e_payload.json" -w 'HTTP:%{http_code}' | Out-String
Write-Host $err.Trim()

Write-Host '=== 5. Stock decrementado en pedido (validación regex en response) ==='
Set-Content -Path "$env:TEMP\e2e_payload.json" -Value '{"items":[{"productId":"prod-3d-jarron","name":"Jarrón","category":"Impresión 3D","material":"PETG","color":"Azul","price":45000,"quantity":2}],"channelId":"cnal-store-web","notasProduccion":"Test e2e"}' -Encoding ascii
$newOrder = curl.exe -sS -X POST http://localhost:5000/api/orders/ -H "Authorization: Bearer $token" -H 'Content-Type: application/json' --data-binary "@$env:TEMP\e2e_payload.json" | ConvertFrom-Json
Write-Host "new order: $($newOrder.order.orderNumber) cliente=$($newOrder.order.customerName) clientStats.ordersCount=$($newOrder.clientStats.ordersCount) totalVentas=$($newOrder.clientStats.totalVentas) primeraVisita=$($newOrder.order.primeraVisita)"

Write-Host '=== 6. Devoluciones CRUD ==='
Set-Content -Path "$env:TEMP\e2e_payload.json" -Value "{`"orderId`":`"$($newOrder.order.id)`",`"productId`":`"prod-3d-jarron`",`"cantidad`":1,`"motivo`":`"Defecto en capa`"}" -Encoding ascii
$devCreate = curl.exe -sS -X POST http://localhost:5000/api/devoluciones/ -H "Authorization: Bearer $token" -H 'Content-Type: application/json' --data-binary "@$env:TEMP\e2e_payload.json" | ConvertFrom-Json
Write-Host "create: $($devCreate.message) id=$($devCreate.devolucion.id)"
$devList = curl.exe -sS http://localhost:5000/api/devoluciones/ -H "Authorization: Bearer $token" | ConvertFrom-Json
Write-Host "list: $($devList.Count) devoluciones, ultima estado=$($devList[0].estado)"
Set-Content -Path "$env:TEMP\e2e_payload.json" -Value '{"estado":"completado"}' -Encoding ascii
$devUpd = curl.exe -sS -X PUT "http://localhost:5000/api/devoluciones/$($devCreate.devolucion.id)" -H "Authorization: Bearer $token" -H 'Content-Type: application/json' --data-binary "@$env:TEMP\e2e_payload.json" | ConvertFrom-Json
Write-Host "update: $($devUpd.message)"

Write-Host '=== 7. DELETE devolucion completa (stock restituyo) ==='
curl.exe -sS -X DELETE "http://localhost:5000/api/devoluciones/$($devCreate.devolucion.id)" -H "Authorization: Bearer $token" | Out-String
$stockPostDelete = curl.exe -sS http://localhost:5000/api/inventory/panel -H "Authorization: Bearer $token" | ConvertFrom-Json | ForEach-Object { $_.inventory | Where-Object { $_.id -eq 'prod-3d-jarron' } | Select-Object -ExpandProperty stockActual }
Write-Host "stock jarron despues de borrar devolucion: $stockPostDelete"

Write-Host '=== 8. Cancelar devolucion (sin restitucion) ==='
Set-Content -Path "$env:TEMP\e2e_payload.json" -Value "{`"orderId`":`"$($newOrder.order.id)`",`"productId`":`"prod-3d-jarron`",`"cantidad`":1,`"motivo`":`"Voluntaria`"}" -Encoding ascii
$dev2 = curl.exe -sS -X POST http://localhost:5000/api/devoluciones/ -H "Authorization: Bearer $token" -H 'Content-Type: application/json' --data-binary "@$env:TEMP\e2e_payload.json" | ConvertFrom-Json
Write-Host "create: $($dev2.message) id=$($dev2.devolucion.id)"
curl.exe -sS -X DELETE "http://localhost:5000/api/devoluciones/$($dev2.devolucion.id)" -H "Authorization: Bearer $token" | Out-String

Write-Host '=== 9. Lifecycle funcional: recompute al actualizar cliente ==='
Set-Content -Path "$env:TEMP\e2e_payload.json" -Value '{"telefono":"30000000000"}' -Encoding ascii
$upd = curl.exe -sS -X PUT "http://localhost:5000/api/clientes/$cid" -H "Authorization: Bearer $token" -H 'Content-Type: application/json' --data-binary "@$env:TEMP\e2e_payload.json" | ConvertFrom-Json
Write-Host "update: $($upd.message) clientStats.score=$($upd.clientStats.scoreVentas) status=$($upd.clientStats.status)"
