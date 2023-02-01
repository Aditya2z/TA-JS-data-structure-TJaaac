1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]`// false, two anonymus arrays are being declared and value 10 is being assigned to 0th index of both the arrays but since they are stored at different memory address when we compare the variables storing their memory address we get false.
- What is the value of obj? // answer { surname: 'Stark' };
- `obj == newObj` // false value by refrence
- `obj === newObj` // false value by refrence
- `user === newObj` // false value by refrence
- `user == newObj` // false value by refrence
- `user == obj` // true
- `arr == arr2` // true
- `arr === arr2` // true

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.
The value of 'person1' will be {name: 'Alex', age: 25} because the value of age key inside it is changed when it passes through the function personDetails. The value of person2 will be {name: 'John', age: 50} because the function returns the another variable called 'person' which contains memory address of an object and that same address will be copied in person2 variable. 
<!-- To add this image here use ![name](./hello.jpg) -->
![name](Untitled-2023-02-01-1219.png)
```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);
console.log(person2);
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //1. output true
console.log(user.brothers.length === brothers.length); //2. output true
```
