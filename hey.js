var data = Array.from({ length: 20 }, function () { return ({
    x: Math.random() * 10,
    y: Math.random() * 20
}); });
function mean(values) {
    return values.reduce(function (a, b) { return a + b; }, 0) / values.length;
}
function linearRegression(points) {
    var xValues = points.map(function (p) { return p.x; });
    var yValues = points.map(function (p) { return p.y; });
    var xMean = mean(xValues);
    var yMean = mean(yValues);
    var numerator = 0;
    var denominator = 0;
    for (var i = 0; i < points.length; i++) {
        numerator += (xValues[i] - xMean) * (yValues[i] - yMean);
        denominator += Math.pow((xValues[i] - xMean), 2);
    }
    var m = numerator / denominator;
    var b = yMean - m * xMean;
    return { m: m, b: b };
}
var _a = linearRegression(data), m = _a.m, b = _a.b;
console.log("Linear Regression Result:");
console.log("Slope (m): ".concat(m.toFixed(4)));
console.log("Intercept (b): ".concat(b.toFixed(4)));
