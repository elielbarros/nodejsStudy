const name = 'Eliel';

let age = 29;

const hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}

const summarizeUser1 = function (userName, userAge, userHasHobby) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
};

const summarizeUser2 = (userName, userAge, userHasHobby) => {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
};

const summarizeUser3 = (userName, userAge, userHasHobby) => 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;

// The parenteses is for the case that you have two or more variables to pass in the function
const add = (a, b) => a + b;

// If you dont have two variables to pass for the function, u can ignore it like the code below:
const addOne = a => a + 1;

// If there are no arguments to pass in the function you have to do like the code below:
const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));

console.log(summarizeUser1(name, age, hasHobbies));

console.log(summarizeUser2(name, age, hasHobbies));

console.log(summarizeUser3(name, age, hasHobbies));

console.log(add(1,2));

console.log(addOne(1));

console.log(addRandom());

// About Object

// Why dont use the function greet with arrow function?
// When we use the arrow function and try to print 'this.name' occurs one error
// this.name is undefined. It occurs because this make reference to global scope of node and not to person
// The next approach makes this work well
const person = {
    name: 'Eliel',
    age: 25,
    greet: () => {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();

const person1 = {
    name: 'Eliel',
    age: 25,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person1.greet();