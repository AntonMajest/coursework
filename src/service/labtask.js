export function calculateEquation(x) {
    return x*(Math.sqrt(2+ Math.cos(Math.PI* x)))
}

export function calculateDifferential(x) {
    return (-(Math.PI * x * Math.sin(Math.PI * x))/(2 * Math.sqrt(Math.cos(Math.PI * x )+ 2)) + Math.sqrt(Math.cos(Math.PI * x) + 2)) 
}