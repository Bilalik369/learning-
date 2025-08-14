type Point = {
    x: number;
    y: number;
  };
  
  const data: Point[] = Array.from({ length: 20 }, () => ({
    x: Math.random() * 10,
    y: Math.random() * 20
  }));
  
  function mean(values: number[]): number {
    return values.reduce((a, b) => a + b, 0) / values.length;
  }
  
  function linearRegression(points: Point[]): { m: number; b: number } {
    const xValues = points.map(p => p.x);
    const yValues = points.map(p => p.y);
  
    const xMean = mean(xValues);
    const yMean = mean(yValues);
  
    let numerator = 0;
    let denominator = 0;
  
    for (let i = 0; i < points.length; i++) {
      numerator += (xValues[i] - xMean) * (yValues[i] - yMean);
      denominator += (xValues[i] - xMean) ** 2;
    }
  
    const m = numerator / denominator;
    const b = yMean - m * xMean;
  
    return { m, b };
  }
  
  const { m, b } = linearRegression(data);
  
  console.log("Linear Regression Result:");
  console.log(`Slope (m): ${m.toFixed(4)}`);
  console.log(`Intercept (b): ${b.toFixed(4)}`);
  