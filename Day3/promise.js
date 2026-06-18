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

const student = new Promise((resolve, reject)=>{
    let success = true
    if(success){
        resolve("Pass")
    }
    else{
        reject("Fail")
    }
})
student
    .then(result => console.log(result))
    .catch(error => console.log(error))

