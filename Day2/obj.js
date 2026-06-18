// const student = {
//     Name : "Abhi",
//     greet(){
//         console.log("helllo");
//     }

// }

// student.greet()

// const student = {
//     name(){
//         console.log("Abhishek ");
//     },
//     age(){
//         console.log("22");

//     },
//     address(){
//         console.log("Prayagraj");
//     },
//     isstudent(){
//         console.log(true);
//     }
// }
// student.name();
// student.age();
// student.address();
// student.isstudent();

// console.log(Object.entries(student));

// const student = {
//     name1 : "Abhishek"

// }
// Object.freeze(student);
// Object.seal(student)
// student.name = "Kartikeya"
// console.log(student.name)

// const student1 ={
//     name : "Shubham"
// }
// const result = Object.assign({}, student, student1)
// console.log(result)


// let obj1 = {
//     a : 1
// }
// let obj2 = {
//     b : 2
// }
// let result1 = Object.assign({}, obj1, obj2)
// console.log(result1);


// function greet(call){
//     console.log( call,"Bye world" );
   
// }
// function Bye(back){
//         back("Hello");
// }
// Bye(greet)


// CALLBACK HELL

// function student(){
//     console.log("Welcome student 1 ")
// }
// function student1(){
//     console.log("student2")

//     function student2(){
//         setTimeout(() => {
//             console.log("Hello student2")
//         },2000);
    
    
//     function student3(){
//         setTimeout(() => {
//             console.log("hi! student3") 
//         }, 1000);
       
//     }
//     student3();
// }
// student2();
// }
// student1();


// function arthimatic(){
//     return a +b
// function addition(a,b){
//     console.log(a+b);
//     function multiplication(a,b){
//         console.log(a*b)
//         function division(a,b){
//             console.log(a/b)
//             function subtraction(a,b){
//                 console.log(a-b)
//             }
//             subtraction(7,2);
//         }
//         division(10,2);
//     }
//     multiplication(12,3);
// }
// addition(15,3);
// }

// function subtraction(a, b) {
//     console.log("Subtraction =", a - b);
// }

// function division(a, b) {
//     console.log("Division =", a / b);
//     subtraction(a, b);
// }

// function multiplication(a, b) {
//     console.log("Multiplication =", a * b);
//     division(a, b);
// }

// function addition(a, b) {
//     console.log("Addition =", a + b);
//     multiplication(a, b);
// }

// function arithmetic(a, b) {
//     addition(a, b);
// }

// arithmetic(10, 5);

