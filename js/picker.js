function findTools(choices) {
  return tools.filter(function (b) {
    return b.materials.includes(choices.material) &&
           b.objectives.includes(choices.objective) &&
           b.precision >= choices.minPrecision &&
           b.maxThickness >= choices.minThickness &&
           b.maxSize >= choices.minSize;
  });
}