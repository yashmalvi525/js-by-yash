class Human {
    #age;
    #ht;

    constructor(age, ht) {
        this.#age = age;
        this.#ht = ht;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        if (value < 0) {
            console.error("Age cannot be negative.");
        } else {
            this.#age = value;
        }
    }

    setHeight(newHeight) {
        if (newHeight < 0) {
            console.error("Height cannot be negative.");
        } else {
            this.#ht = newHeight;
        }
    }

    displayInfo() {
        console.log(`Age: ${this.#age}, Height: ${this.#ht}`);
    }
}

const person = new Human(25, 175);
console.log(person.age);

person.setHeight(180);
person.displayInfo();

person.setHeight(-10);