export const sortFunctions = {
  alpha: (a, b) => a.name.localeCompare(b.name),
  low: (a, b) => a.price - b.price,
  high: (a, b) => b.price - a.price,
};