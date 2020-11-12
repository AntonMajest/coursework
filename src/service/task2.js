import {getAmountAfterDot} from "./task1";

export let data = [
    {b: 1.5, k: 700, t: 303},
    {b: 2.5, k: 1200, t: 300},
    {b: 2.0, k: 1000, t: 293},
    {b: 7.5, k: 2780, t: 313},
    {b: 1.5, k: 900, t: 299},
    {b: 2.5, k: 1500, t: 303},
]

function calculateLeftEquation(x) {
    let y = ((3/2)-(Math.pow(x,2)+700*x-303)/(Math.pow(x,2)-700*x+303))
    console.log(y)
    return y
}
/*function calculateLeftEquation(b,k,t) {
    return (-b * k - k + Math.sqrt(-(4 - 4 * b) * (-b * k * t - k * t)+ Math.pow((b * k + k),2)))/(2 - 2 *b)
}*/

function calculateRightEquation(b, k, t) {
    let y = (-b * k - k + Math.sqrt(-(4 - 4 * b) * (-b * k * t - k * t)+ Math.pow((b * k + k),2)))/(2 - 2 *b)
    return y
}

export function calculateEquation(interval, data, precision) {
    let {min, max} = interval
    if(min > max) throw new Error('Min не може бути більше max')
    if(precision <= 0) throw new Error('Точність не може бути менше 0')
    let rightPart = +calculateRightEquation(...Object.values(data))
    let lowest = Infinity
    let result = { data: [], correctY: 0, correctX: 0}
    let correctCalculatedX = rightPart.toFixed(getAmountAfterDot(precision))
    let correctCalculatedY = calculateLeftEquation(correctCalculatedX)
    result.correctX = correctCalculatedX
    result.correctY = correctCalculatedY
    for(let i = min; i < max; i += precision) {
        let correctX = +i.toFixed(getAmountAfterDot(precision))

        let calculatedY = calculateLeftEquation(correctX)



        result.data.push({X: correctX, Y: calculatedY})

    }

    return result
}

// if(Math.abs(rightPart - calculatedY) < lowest) {
//     result.correctX = correctX
//     result.correctY = calculatedY
//     lowest = Math.abs(rightPart - calculatedY)
// }