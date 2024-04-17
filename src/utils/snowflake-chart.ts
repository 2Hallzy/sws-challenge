// This should be done as a function but right now it's quicker to eyeball it.
// If I built this for real I'd use math to calculate points on a better SVG.
const pointMap = {
  value: [
    { x: 50, y: 50 },
    { x: 50, y: 45 },
    { x: 50, y: 40 },
    { x: 50, y: 35 },
    { x: 50, y: 30 },
    { x: 50, y: 25 },
    { x: 50, y: 20 },
  ],
  future: [
    { x: 50, y: 50 },
    { x: 55, y: 48 },
    { x: 60, y: 47 },
    { x: 65, y: 45 },
    { x: 69, y: 43 },
    { x: 74, y: 41 },
    { x: 78.3, y: 40 },
  ],
  past: [
    { x: 50, y: 50 },
    { x: 54, y: 54 },
    { x: 57, y: 57.6 },
    { x: 61, y: 61.6 },
    { x: 64, y: 64.6 },
    { x: 67.6, y: 67.6 },
    { x: 71, y: 71.6 },
  ],
  health: [
    { x: 50, y: 50 },
    { x: 47, y: 54 },
    { x: 43.1, y: 57.6 },
    { x: 39.1, y: 61.6 },
    { x: 36.1, y: 64.6 },
    { x: 32.1, y: 68.6 },
    { x: 29.1, y: 71.6 },
  ],
  income: [
    { x: 50, y: 50 },
    { x: 45, y: 48 },
    { x: 39.7, y: 47.5 },
    { x: 34.7, y: 45.5 },
    { x: 30.7, y: 43.5 },
    { x: 25.7, y: 41.5 },
    { x: 21.7, y: 40 },
  ],
};

interface StockScores {
  value: number;
  future: number;
  past: number;
  health: number;
  income: number;
  total: number;
}

// Don't love this either
function stockScoresToCoordinates(stockScores: StockScores) {
  return [
    pointMap["value"][stockScores.value || 0],
    pointMap["future"][stockScores.future || 0],
    pointMap["past"][stockScores.past || 0],
    pointMap["health"][stockScores.health || 0],
    pointMap["income"][stockScores.income || 0],
  ];
}

// This also should be some sort of math function
function stockScoresToColour(stockScores: StockScores) {
  const total = stockScores.total || 0;
  if (total < 10) {
    return "#ff0000";
  } else if (total < 15) {
    return "#ff8000";
  } else if (total < 20) {
    return "#ffff00";
  } else if (total < 25) {
    return "#80ff00";
  } else {
    return "#00ff80";
  }
}

export { stockScoresToCoordinates, stockScoresToColour };
export type { StockScores };
