$login = curl.exe -sS -X POST http://localhost:5000/api/auth/login -H 'Content-Type: application/json' --data-binary "@$env:TEMP\login.json" | ConvertFrom-Json
$token = $login.token
$cll = curl.exe -sS http://localhost:5000/api/clientes/ -H "Authorization: Bearer $token" | ConvertFrom-Json
foreach ($cl in $cll) { Write-Host "  $($cl.nombre) -> $($cl.id) ($($cl.email)) status=$($cl.status) score=$($cl.scoreVentas) tqs=$($cl.tqs)" }
$cid = $cll[0].id
Write-Host "PUT /api/clientes/$cid"
Set-Content -Path "$env:TEMP\e2e_payload.json" -Value '{"telefono":"30000000000"}' -Encoding ascii
$upd = curl.exe -sS -X PUT "http://localhost:5000/api/clientes/$cid" -H "Authorization: Bearer $token" -H 'Content-Type: application/json' --data-binary "@$env:TEMP\e2e_payload.json" | ConvertFrom-Json
Write-Host "update message: $($upd.message)"
Write-Host "clientStats: $($upd.clientStats | ConvertTo-Json -Depth 2)"
