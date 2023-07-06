function generate(n:number):number[] {
    let array: number[] = []
    for(let i = 0; i <= n; i++) {
        array.push(i)
    }
    return array
}

function generate2(n:number):number[] {
    let array: number[] = []
    let a = 1
    
    if(n<0) {
        a = -1
        n = n*(-1)
    }
    
    for(let i = 0; i <= n; i++) {
        array.push(i*a)    
    }
    return array
}

function degenerate(n:number):number[] {
    let array: number[] = []
    let a: number = 0
    let b: number = 1
    
    if(n<0) {
        b = -1
        n = n*b
    }

    while(n > array.length) {
        array.push(a = a + 1*b)
    }
    return array
}

function generateWithSteps(firstNumber:number, secondNumber:number, step:number) {
    let array: number[] = []
    array.push(firstNumber)
    let d = firstNumber;
    for(let i = 0; secondNumber - d >= step; i++) {
            array.push(d = d + step)
    }
    return array
}

function generateWithSteps2(firstNumber:number, secondNumber:number, step:number) {
    let array: number[] = []
    for(let i = firstNumber; secondNumber - i >= step; (i = i + step)) {
            array.push(i)
    }
    return array
}

function generateWithSteps3(firstNumber:number, secondNumber:number, step:number) {
    let array: number[] = []

    if(secondNumber > firstNumber) {
        let d = firstNumber;
        array.push(d)
        for(let i = 0; secondNumber - d >= step; i++) {
            array.push(d = d + step)
        }
    } else {
        let e = firstNumber
        array.push(e)
        for(let i = 0; e - secondNumber > secondNumber; i++) {
            array.push(e = e - step)
        }
    }

    return array
}