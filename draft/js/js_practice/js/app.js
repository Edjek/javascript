const userList = [
    { name: 'John', gender: 'M', salary: 35000 },
    { name: 'Jade', gender: 'F', salary: 42000 },
    { name: 'Joe', gender: 'M', salary: 32000 },
    { name: 'Jacky', gender: 'F', salary: 38000 },
];

const user = { name: 'John', gender: 'M', salary: 35000 };

let sumSalaryMen = userList
    .filter((user) => user.gender === 'M')
    .map((user) => user.salary + 1000)
    .reduce((sumSalary, salary) => sumSalary + salary);

console.log(sumSalaryMen);
console.table(userList);
console.log(userList, user.name);
console.log(`mon nom est ${user.name}, je gagne ${user.salary}`);

let hello = ({ name }) => console.log(name);

hello(user);

let text = 'Of all the wizards in Lord of the Rings, RADAGAST is my favorite of the wizards.';
text = text.replaceAll('wizards', 'sorcerers');

console.log(text);

let lower = text.toLowerCase();
console.log(lower);

let num = 0;
let answer = num > 10 ? num : 42;
console.log(answer);

const h1 = document.getElementsByTagName('h1');

const h2  = document.createElement('h2');
h2.textContent = 'Hello World';
h1[0].after(h2)

console.log(document.querySelector('body').parentElement)