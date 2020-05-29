// Initialization

let g = []
let h = []
g.push([0,-5,8,-4])

function findValue(m) {
    value = ((m[0]*m[2])-(m[1]*m[3]))/(m[0]-m[1]+m[2]-m[3])
    return value;
} 


function rnd(x){
    return Math.round(x * 1000) / 1000
}


function findOptimal(m) {
    let out = [
        rnd((m[2]-m[3])/(m[0]-m[1]+m[2]-m[3])),
        rnd((m[0]-m[1])/(m[0]-m[1]+m[2]-m[3])),
        rnd((m[2]-m[1])/(m[0]-m[1]+m[2]-m[3])),
        rnd((m[0]-m[3])/(m[0]-m[1]+m[2]-m[3]))
    ]
    return out
}



h.push([findValue(g[0]),8,-7,6])

function gIterator(i) {
    temp = [findValue(h[i-1]),-5,8,4]
    g.push(temp)
}

function hIterator(i) {
    temp = [findValue(g[i-1]),8,-7,6]
    h.push(temp)
}


for (i=1;i<=100;i++) {
    gIterator(i)
    hIterator(i)
    console.log(`Value of G is: ${(findValue(g[i]))}`)
    console.log(`Value of H is: ${(findValue(h[i]))}`)
}

console.log(`Strategy for G is: ${findOptimal(g[99])}`)
console.log(`Strategy for H is: ${findOptimal(h[99])}`)
