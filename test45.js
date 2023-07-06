"use strict";
class Cart {
    constructor() {
        this.TotalCost = 0;
        this.ArrProductInCart = [];
    }
    addProductInCart(product) {
        this.ArrProductInCart.push(product);
    }
    removeProductFromCart(id) {
        const index = this.ArrProductInCart.findIndex((el) => el.id === id);
        if (index !== -1) {
            this.ArrProductInCart.splice(index, 1);
        }
        /*for(let index = 0; index < this.ArrProductInCart.length; index++) {
            if(this.ArrProductInCart[index].id === id) {
                delete this.ArrProductInCart[index];
                break;
            }
        }*/
    }
    calculateTotalCost() {
        this.TotalCost = 0;
        this.ArrProductInCart.forEach((el) => this.TotalCost += el.price);
        /*for(let index = 0; index < this.ArrProductInCart.length; index++) {
            this.TotalCost = this.ArrProductInCart[index].price + this.TotalCost

        }*/
    }
    setDelivery(x) {
        this.checkTypeDelivery = x;
    }
}
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class DeliverytoHome {
    constructor(day, adress) {
        this.date = new Date(2023, 2, day);
        this.adress = adress;
    }
}
class DeliveryToPoint {
    constructor(id) {
        this.TodaysDate = new Date();
        this.id = id;
    }
}
/*const prod1 = new Product(10, 'Молоко', 100)

const prod2 = new Product(20, 'НЕМолоко', 200)

const cart1 = new Cart()

let a = cart1.addProductInCart(prod1)

console.log(cart1)

cart1.removeProductFromCart(10)

console.log(cart1)*/ 
