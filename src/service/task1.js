function calculateEquation(x) {
    return Math.pow(x,3) - Math.exp(4*x)- 5.5
}

function getAmountAfterDot(n) {
    return n > 0 && n < 1 ? n.toString().length - 2 : 0
}

export function findSolutionByIteration(interval, n) {
    let result = []
    let afterDot = getAmountAfterDot(n)
    for(let i = interval.min; i <= interval.max; i += n) {
        let j = +i.toFixed(afterDot)
        result.push({'Y': calculateEquation(j), 'X': j})
    }
    return result
}

export function findSolutionByDichotomy(interval, n) {
    let {min, max} = interval
    let center
    for(let i = 0; i < n; i++) {
        center = (min + max) / 2
        calculateEquation(center) * calculateEquation(max) >= 0 ? max = center : min = center
    }
    return (min + max) / 2
}

export function closestToZero(dots) {
    let closest = dots[0]
    dots.forEach((dot) => {
        if(Math.abs(closest.Y) > Math.abs(dot.Y)) {
            closest = dot
        }
    })
    return closest.X
}









