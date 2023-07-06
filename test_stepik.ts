// 1) Сверка паролей

function passwordCheck(a: string, b: string): string {
    if (a == b) {
        return 'Пароль принят'
    } else {
        return 'Пароль не принят'
    }
}

// 2) Чётное не чётное

function checkEven(num: number): string {
    return num % 2 == 0 ? 'Чётное' : 'Нечетное'
    // if (num % 2 == 0) {
    //     return 'Чётное'
    // } else {
    //     return 'Нечетное'
    // }
}

// 3) Для заданного четырехзначного числа выполняется следующее соотношение: 
// сумма первой и последней цифр равна разности второй и третьей цифр.

function calculateSummNumbers(num: number) {
    let numToString:string = String(num)
    //let arrString = numToString.split('')
    return Number(numToString[0]) + Number(numToString[3]) === Number(numToString[1]) - Number(numToString[2]) ? 'ДА' : 'НЕТ'
}


//Условный оператор, логические операции
//2)

function lineSegment (x: number) {
    if(x > -3 && x < 7) {
        return ('Не принадлежит')
    } else {
        return ('Принадлежит')
    }
}