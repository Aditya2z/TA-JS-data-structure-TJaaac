```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
<!-- Instead of doing it on notebook, i did it computer -->

- Take a photo/screenshot and add it to the folder `code`
<!-- To add this image here use ![name](./hello.jpg) -->
![name](./Untitled-2023-02-01-1219.png)`

2. Answer the following with reason:

- `user == newUser;` // true and reason because of copy by refrence
- `user === newUser;` // true and reason because of copy by refrence
- `user.name === newUser.name;` // true and reason because of copy by refrence
- `user.name == newUser.name;` //true and reason because of copy by refrence
- `user.sibling == newUser.sibling;` // true and reason because of copy by refrence
- `user.sibling === newUser.sibling;` // true and reason because of copy by refrence
- `user.sibling == allBrothers;` // false
- `user.sibling === allBrothers;` // false
- `brothersCopy === allBrothers;` // false
- `brothersCopy == allBrothers;` // false
- `brothersCopy == user.sibling;` // true
- `brothersCopy === user.sibling;` // true
- `brothersCopy[0] === user.sibling[0];` // true
- `brothersCopy[1] === user.sibling[1];` // true
- `user.sibling[1] === newUser.sibling[1];` //true
