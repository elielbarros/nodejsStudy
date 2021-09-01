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

console.log(add(1, 2));

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

// --------------------------- Aula 16 Arrays & Array Methods ---------------------------
const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby)
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

// --------------------------- Aula 17 Arrays, Objects & Reference Types ---------------------------
hobbies.push('Programming');
console.log(hobbies);
// Dar push de um novo 'objeto' em uma const array não significa que vamos 'modificar' ela.

// --------------------------- Aula 18 Understanding Spread & Rest Operators ---------------------------
// Criar uma nova array com todos os valores antigos mais o novo valor
const copiedArray = hobbies.slice(); // copia uma array
const copiedArray2 = [...hobbies]; // copia uma array tambem
console.log(copiedArray);
console.log(copiedArray2);

// Vc pode copiar uma pessoa da mesma forma
const copiedPerson = { ...person };
console.log(copiedPerson);

// Temos uma questão, nao um problema. Temos uma função que recebe tres argumentos..
// Mas eu nao quero receber os argumentos assim, pois se eu quiser acrescentar mais um, teria que acrescentar tambem a função
// A solução vem apos esse exemplo
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

console.log(toArray(1, 2, 3, 4));

// To resolve this question do:
// Merge multiple arguments into an array
const toArray2 = (...args) => {
    return args;
}

console.log(toArray2(1, 2, 3, 4, 5, 6));

// --------------------------- Aula 19 Destructuring ---------------------------
// FORMA ESTRUTURADA
const printName = (person) => {
    console.log(person.name);
}
printName(person);

// FORMA DESESTRUTURADA
const printName2 = ({ name }) => {
    console.log(name);
}
printName2(person);


const person3 = {
    namePerson: 'Eliel', agePerson: '25'
}
const { namePerson, agePerson } = person3;
console.log(namePerson, agePerson);

const hobbies3 = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies3;
console.log(hobby1, hobby2);

// --------------------------- Aula 20 Async & Promises ---------------------------

// FIRST APPROACH
// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Done!');
//     }, 1500);
// }

// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(text => {
//         console.log(text);
//     })
// }, 2000);

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });

    return promise;
}

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
    .then( text => {
        console.log(text);
        return fetchData();
    })
    .then( text2 => {
        console.log(text2);
    });
}, 2000);

// --------------------------- Aula 21 Template Literals ---------------------------
const exampleName = 'Eliel';

// Using backticks
console.log(`${exampleName} is studying NodeJS`);