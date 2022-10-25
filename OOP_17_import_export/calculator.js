export const PI = 22 / 7;

export class Calculator {
    constructor() {
        this.number = 1;
    }

    initialNumber(number) {
        return number;
    }

    add(value) {
        this.number += value;
        return this;
    }

    substract(value) {
        this.number -= value;
        return this;
    }

    divide(value) {
        this.number /= value;
        return this;
    }

    multiply(value) {
        this.number *= value;
        return this;
    }

    squreRoot() {
        this.number = Math.sqrt(this.number);
        return this;
    }

    exponent(value) {
        this.number = Math.pow(this.number, value);
        return this;
    }

    squre() {
        this.number = Math.pow(this.number, 2);
        return this;
    }

    result() {
        console.log(this.number);
    }
}

