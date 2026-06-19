// const mypromise = new Promise((resolve, reject)=> {
//     let success = 4
//     if(success){
//         resolve("data loaded!")  //success
//     }
//     else{
//         reject("error occured!") //fail
//     }
// })

// mypromise 
//         .then(result => console.log(result)) 
//         .catch(error => console.log(error))

// const student = new Promise((resolve, reject)=>{
//     let success = true
//     if(success){
//         resolve("Pass")
//     }
//     else{
//         reject("Fail")
//     }
// })
// student
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

// function wait2second(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve("2 second done")
//         }, 3000)
//     })
// }
// console.log("start")
// wait2second().then(result => console.log(result))

// a = 4
// console.log(a)

// function add(num){
            
//     return new Promise(resolve =>resolve(num +5) 
        

//      )
//   }
//   Promise.resolve(10)
//   .then(add)
//   .then(add)
//   .then(result => console.log(result))

function wait(msg, ms){
    return new Promise(resolve => setTimeout(()=> resolve(msg),ms)) 
}
async function run(){
    console.log("start")
    const result = await wait("done  waiting", 1000)
    console.log(result)
    console.log("end")

}
run()