"use strict";
class Logger {
    printDate() {
        let currentDate = new Date();
        return currentDate;
    }
}
class LogWithDate extends Logger {
    log(text) {
        return text;
    }
    logWithDateFunction(enterText) {
        return console.log(this.printDate() + '\n' + this.log(enterText));
    }
}
const a = new LogWithDate();
a.logWithDateFunction('Какой-то текст');
