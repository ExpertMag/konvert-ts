"use strict";
class User1 {
    constructor() {
        this.skills = [];
    }
    addSkill(x) {
        if (typeof x == "string") {
            this.skills.push(x);
        }
        else {
            this.skills = this.skills.concat(x);
        }
    }
}
