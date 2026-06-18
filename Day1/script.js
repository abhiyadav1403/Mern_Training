// console.log("hello, world!");

// console.log("My name is Abhishek Yadav , and i am persuing b.tech from BBS College of Engineering and Technology");
// let a =10;
// let b = 13;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);


// console.log(a>b);
// console.log(b>a);
// console.log(a>=b);
// console.log(b>=a);
// console.log(a==b);
// console.log(a===b);

// let c =10;
// c += 5
// console.log(c)

// let d = 20;
// d -= 5;
// console.log(d);

// let e =12;
// e *=4;
// console.log(e);

// const add = (a , b)=>{
//     return a + b
// }
// console.log(add( 12,15));

// const squre = x => x*x;
// console.log("Square", squre(5));


// const arr = [1,2,23, "String", 12.3];
// arr.push("JavaSrcipt");
// console.log(arr);

// const empty = new Array(4);
// empty.push(11);
// empty.push(12);
// empty.push(13);
// empty.push(14);
// empty.push(15)
// console.log(empty);

// const number = [1,2,3,4,5]
// const mixed = [1, "Abhi", true, null, {name: "Abhsihek"}];
// console.log(number);
// console.log(mixed);


// array declaration using array constructor

// const empty = new Array(4)
// const numbers = new Array(1,2,3)
// console.log(empty);
// console.log(numbers);

// const arr = [1,2,3,4,5,6]
// console.log(arr[4])

// console.log(arr[arr.length - 1]);


// let fruits = ["Apple", "Banana", "Mango"];

// console.log(fruits[fruits.length - 1]);


// Modification of array
// arr[1] = 4

// // console.log(arr);
// arr[3] =6;
// console.log(arr);

// Push the element in array
// arr.push(7);
// arr.push(8);
// arr.push(9);
// console.log(arr);

// pop the element in array
// arr.pop();
// console.log(arr);

// arr.pop(7);
// console.log(arr);

// Starting value delete
// arr.shift();
// console.log(arr);

// start of an array
// arr.unshift(0);
// console.log(arr);


// add position splice 
// const arr3 = [12,3,4,5,6]
// arr3.splice(3);
// console.log(arr3)

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// // fruits.splice(1, 2);

// fruits.splice(1,0 , "Mango", "Banana");

// console.log(fruits);

// slice 

const nums = [1,2,3,4,5]
const part = nums.slice(1,4)
console.log(part);

// Map 
const double = nums.map(n => n*3)
console.log(double)


//  foreach 
// const fe = nums.forEach(n => n*2)
// console.log(fe)

// filter
const events = double.filter(n => n%2 ===0)
console.log(events)

const sum = nums.reduce((acc, curr) => acc + curr, 0)
console.log(sum)

const found = nums.find(n => n>3)
console.log(found)

console.log(nums.includes(8))

const unsorted = [10,3,8,12,22,4,6]
unsorted.sort((a,b) => b -a)
console.log(unsorted)

//  OBJECT

const person ={
    Name : "Abhishek",
    Age : 22,
    isstudent: false,
}
// notation access
console.log(person.Name);
// bracket noation
console.log(person["Age"])

const key = "isstudent"
console.log(person[key])

// update
const car = {brand : "tesla"}
// add
car.model = "model t4"
// update 
car.brand = "tata"
console.log(car)

delete car.brand
console.log(car)

