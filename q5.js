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


let g1=[]
let g2=[]
let g3=[]

//Initial values
g1.push(findValue([1,-3,2,-1]))
g2.push(findValue([1,-2,-2,-1]))
g3.push(findValue([1,-1,1,-2]))

function calculateG1(n) {
    g1.push(
    findValue([
            1+0.1*g2[n-1]+0.1*g3[n-1],
            -3+0.2*g1[n-1]+0.2*g3[n-1],
            2+0.1*g2[n-1]+0.3*g3[n-1],
            -1+0.1*g1[n-1]+0.6*g2[n-1]
        ])
    )
}

function calculateG2(n) {
    g2.push(
        findValue([
            1+0.1*g1[n]+0.3*g3[n-1],
            -2+0.1*g2[n-1]+0.1*g3[n-1],
            -2+0.5*g1[n]+0.2*g3[n-1],
            -1+0.2*g1[n]+0.3*g2[n-1]
            ])
        )
}

function calculateG3(n) {
    g3.push(
        findValue([
            1+0.1*g2[n]+0.2*g3[n-1],
            -1+0.2*g1[n]+0.2*g2[n],
            1+0.1*g1[n]+0.7*g3[n-1],
            -2+0.3*g1[n]+0.1*g2[n]
            ])
        )
}

for (i=1;i<=10;i++){
    calculateG1(i)
    calculateG2(i)
    calculateG3(i)
}

console.table(g1)
console.table(g2)
console.table(g3)

let eG1=g1[10]-g1[9]
let eG2=g2[10]-g2[9]
let eG3=g3[10]-g3[9]

const minStop = 0.2

console.log(`Difference between last stages are:\n ${eG1} \n ${eG2} \n ${eG3}`)

console.log(`Error bounds are:\n ${eG1*minStop} \n ${eG2*minStop} \n ${eG3*minStop}`)

let g1Final = [
    1+0.1*g2[10]+0.1*g3[10],
    -3+0.2*g1[10]+0.2*g3[10],
    2+0.1*g2[10]+0.3*g3[10],
    -1+0.1*g1[10]+0.6*g2[10]
]

let g2Final = [
    1+0.1*g1[10]+0.3*g3[10],
    -2+0.1*g2[10]+0.1*g3[10],
    -2+0.5*g1[10]+0.2*g3[10],
    -1+0.2*g1[10]+0.3*g2[10]
]

let g3Final = [
    1+0.1*g2[10]+0.2*g3[10],
    -1+0.2*g1[10]+0.2*g2[10],
    1+0.1*g1[10]+0.7*g3[10],
    -2+0.3*g1[10]+0.1*g2[10]
]

console.log(`Final forms are:\n ${g3Final} \n ${g2Final} \n ${g3Final}`)




console.log(`Optimal strategies:\n ${(findOptimal(g1Final))} \n ${findOptimal(g2Final)} \n ${findOptimal(g3Final)}`)