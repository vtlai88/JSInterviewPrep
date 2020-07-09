This is an interview runner. To run each question and see its solution, run this project like so: 
```node index.js 10.1```

1. know what an iffy function is
2. know that a class and a function are the same thing if the function is designed to be a class. a class is an ES6 construct that's syntactic sugar because making a class, but calling it a function is just confusing(very true, not made up)
3. know about the prototype chain, and lookup examples on function  inheritance
4. difference between undefined and not defined
5. interpolation: 1 + "5" => 15
6. Promise chaining: 1) know that promises have resolve, reject and the callbacks are truthy, falsey(via catch statement), and Progress 2)  you can't wrap a try/catch around an invocation of a promise and catch if that promise throws an exception
7. async/await: you can run transform a function into an async function. With a promise, you can't organically. You can define a promise, which looks like a function, but it's not truly a function. similarities: is that async/await is an async structure(psuedo-async because JS is single threaded, so it uses timers under the hood to share space around the main execution thread). If someone asks "in a promise, you can use the reject object, how do you emulate the same thing in async/await." the answer here is via throw. so to implemnent a falsey async/await setup, you want to surround the await with a try/catch, and you throw inside of await'd inner function
8. know that strings operate as an array under the hood in javascript: "thaddeus"[3]=>"d"
9. know the difference between let and var(know how to abuse variable hoisting)
10. Lookup different examples of each: a) variable hoisting and b) function hoisting
11. know about closures and the usage of the this keyword(I will provide an example on this later )
12. .bind()
13. eval() function