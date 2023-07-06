class User1 {
	skills: string[] = [];

	addSkill (x: string):void
	addSkill (x: string[]):void
	addSkill (x: string | string[]) {
		if (typeof x == "string") {
			this.skills.push(x)
		} else {
			this.skills = this.skills.concat(x)
		}
	}
}