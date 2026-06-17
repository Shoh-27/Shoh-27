export const calculateFreeFall = (h0, v0, g, t) => {
    // h = h0 - (v0*t + 0.5*g*t^2)
    const h = h0 - (v0 * t + 0.5 * g * Math.pow(t, 2));
    return Math.max(0, h);
};

export const calculateTimeOfFlight = (h0, v0, g) => {
    // 0 = h0 - v0*t - 0.5*g*t^2
    // 0.5*g*t^2 + v0*t - h0 = 0
    // t = (-v0 + sqrt(v0^2 - 4 * 0.5 * g * (-h0))) / (2 * 0.5 * g)
    // t = (-v0 + sqrt(v0^2 + 2 * g * h0)) / g
    const discriminant = Math.pow(v0, 2) + 2 * g * h0;
    if (discriminant < 0) return 0;
    return (-v0 + Math.sqrt(discriminant)) / g;
};
