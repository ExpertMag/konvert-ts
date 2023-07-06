enum Direct {
	UP = 'UP',
	DOWN = 'DOWN',
}

class Vector {
	x?: number
	y?: number
	direct?: Direct

	constructor()
	constructor(paramOne: number, paramTwo: number)
	constructor(paramOne: Direct)
	constructor(paramOne: number)
	constructor(paramOne?: number | Direct, paramTwo?: number) {
		if (typeof paramOne === 'number') {
			this.x = paramOne
			console.log('Это был ', typeof paramOne)
			if (typeof paramTwo === 'number') {
				this.y = paramTwo
				console.log('Это был ', typeof paramTwo)
			}
		} else if (paramOne == Direct.UP || paramOne == Direct.DOWN) {
			this.direct = paramOne
			console.log('Это был ', typeof paramOne)
		} else {
			this.x = 0
			this.y = 0
			console.log('Это был ', typeof paramOne)
		}
	}
}

const obj3 = new Vector(4)
const obj4 = new Vector()
const obj5 = new Vector(Direct.UP)
const obj6 = new Vector(3, 4)


console.log(obj3)
console.log(obj4)
console.log(obj5)
console.log(obj6)