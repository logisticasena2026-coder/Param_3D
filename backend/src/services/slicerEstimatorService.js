const fs = require('fs');

/**
 * Servicio de estimación de Slicer para impresión 3D (estilo OrcaSlicer)
 * Calcula volumen, peso de filamento, tiempo de máquina y costo de fabricación.
 */
class SlicerEstimatorService {
  constructor() {
    this.densities = {
      PLA: 1.24,
      PETG: 1.27,
      ABS: 1.04,
      TPU: 1.21
    };

    this.materialCostPerGram = {
      PLA: 120, // COP por gramo
      PETG: 150,
      ABS: 140,
      TPU: 190
    };

    this.machineHourlyRate = 5000; // COP/hora de operación y depreciación
    this.maxBuildVolume = { x: 36, y: 36, z: 36 }; // 36x36x36 cm
  }

  /**
   * Analiza un archivo STL o parámetros paramétricos y calcula las métricas de impresión
   * @param {Object} params { filePath, material, infillPercent, layerHeight, estimatedVolumeCm3 }
   */
  estimate(params) {
    const {
      filePath,
      material = 'PLA',
      infillPercent = 20,
      dimensions = { x: 8, y: 8, z: 8 } // cm por defecto
    } = params;

    // Validación de límites de cama de impresión 36x36x36 cm
    if (
      dimensions.x > this.maxBuildVolume.x ||
      dimensions.y > this.maxBuildVolume.y ||
      dimensions.z > this.maxBuildVolume.z
    ) {
      throw new Error(
        `Las dimensiones (${dimensions.x}x${dimensions.y}x${dimensions.z} cm) exceden el volumen máximo de impresión FDM de Maquinamos 3D (36 × 36 × 36 cm).`
      );
    }

    // Si viene archivo, se analiza tamaño en disco como factor de complejidad si no hay parser binario pesado
    let baseVolumeCm3 = 0;
    if (filePath && fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      // Estimación empírica: 1MB de STL equivale en promedio a ~25 cm³ de geometría hueca/sólida
      baseVolumeCm3 = Math.max(10, Math.min(600, Math.round(stats.size / 45000)));
    } else {
      // Cálculo volumétrico basado en bounding box con factor de forma medio (0.4)
      baseVolumeCm3 = dimensions.x * dimensions.y * dimensions.z * 0.38;
    }

    // Factor de relleno (infill)
    const solidFraction = 0.25 + (infillPercent / 100) * 0.75;
    const effectiveVolumeCm3 = baseVolumeCm3 * solidFraction;

    const density = this.densities[material.toUpperCase()] || 1.24;
    const filamentGrams = Math.round(effectiveVolumeCm3 * density * 10) / 10;

    // Estimación de tiempo: ~12-15 gramos por hora a velocidad estándar de 60-80mm/s
    const hours = (filamentGrams / 14) + 0.35; // 0.35h para precalentamiento y primera capa lenta
    const totalMinutes = Math.round(hours * 60);
    const displayHours = Math.floor(totalMinutes / 60);
    const displayMins = totalMinutes % 60;
    const timeFormatted = `${displayHours}h ${displayMins}m`;

    // Costos
    const costPerGram = this.materialCostPerGram[material.toUpperCase()] || 130;
    const materialCost = filamentGrams * costPerGram;
    const machineCost = (totalMinutes / 60) * this.machineHourlyRate;
    const basePrepCost = 7000; // Calibración y preparación de archivo slicer
    const totalPrice = Math.round((materialCost + machineCost + basePrepCost) / 500) * 500;

    return {
      material: material.toUpperCase(),
      filamentGrams,
      printTimeMinutes: totalMinutes,
      printTimeFormatted: timeFormatted,
      dimensions: {
        x: dimensions.x,
        y: dimensions.y,
        z: dimensions.z,
        unit: 'cm'
      },
      infillPercent,
      estimatedVolumeCm3: Math.round(effectiveVolumeCm3 * 10) / 10,
      breakdown: {
        materialCost: Math.round(materialCost),
        machineCost: Math.round(machineCost),
        preparationCost: basePrepCost,
        totalPrice: Math.max(15000, totalPrice) // Tarifa mínima 15.000 COP
      }
    };
  }
}

module.exports = new SlicerEstimatorService();
