// Task 1: Code a Person class
class Person {

    constructor(name = 'Tom',age=20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }   

    sleep() {
        this.energy += 10;
    }

    doSomethingFun() {
        this.energy -= 10;
    }


}

// Task 2: Code a Worker class

class Worker extends Person {
    constructor(name, age, energy, xp = 0,
        hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    
    goToWork() {
        this.xp += 10
    }
}

// Task 3: Code an intern object, run methods
function intern() {

    var intern = new Worker("Bob",21,110,0,10)

    intern.goToWork();
    console.log(intern)

}

// Task 4: Code a manager object, methods
function manager() {
    
    var manager = new Worker("Alice", 30, 120, 100, 30)

    manager.doSomethingFun();
    console.log(manager)

    
}

intern();
manager();


// Assignement 2
console.log('Assignement 2 ===============================================')

class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);


// Assignement 3
console.log('Assignement 3 ===============================================')


// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (var diar of dairy) {
        console.log(diar)
    }
}

logDairy ()

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for( key of Object.keys(bird) ) {
        console.log(key + ": " + bird[key])
    }

}

birdCan()

// Task 3

function animalCan() {
    for (const key in bird) {
        console.log(key + ": " + bird[key] )
        // if (Object.hasOwnProperty.call(bird, key)) {
        //     const element = bird[key];
        //     console.log(element);
            
        // }
    }
    
}

animalCan()

