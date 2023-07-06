abstract class Logger {
    abstract log(message: string): void

    printDate() {
        let currentDate: Date = new Date()
        return currentDate
    }
}

class LogWithDate extends Logger {
    log(text: string) {
        return text
    }

    logWithDateFunction(enterText: string) {
        return console.log(this.printDate() + '\n' + this.log(enterText))
    }
}

const a = new LogWithDate()
a.logWithDateFunction('Какой-то текст')