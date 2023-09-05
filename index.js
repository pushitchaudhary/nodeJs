const app = require('./app.js');

// add function
// const add = app.add(2,8);
// console.log(add);

// sub function
// const sub = app.sub(5,2);
// console.log(sub);

// mul function
// const mul = app.mul(4,2);
// console.log(mul);

const arr =[3,4,2,4,2,4,5,1];

const result = arr.filter((item)=>{
    return item >3;
})


console.log(result);