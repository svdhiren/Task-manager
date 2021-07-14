// ADVANCE CONCEPTS FOR "PROMISE CHAINING" GIVEN BELOW

// const doPromise = new Promise((resolve, reject) => {
//     //Here also we are simulating delay in time to show how promises work.
//     setTimeout(() => {
        
//         //Resolve is called when things worked correctly.
//         resolve([1, 2, 3]);

//         //Reject is called when things went wrong.
//         reject('This is an error...');

//         //Note that only one of them can be called, ie., when reject or resolve is called then the code below that call won't get executed.
//         //On the other hand this is not the case with the callbacks.
//     }, 2000);
// }) 

// //The above was the definition.
// //Since "promise" is an object, we will be using some methods to invoke our function.

// doPromise.then((result) => {
//     //then is invoked only when resolve was called.
//     console.log("Success!  ", result);
// }).catch((error) => {
//     //This is called when things went poorly. In this case "then" is not called.
//     console.log("Error!  ", error);
// })

//"catch" is chained to the "then" method.



// ******************************************************
// ******************************************************
// ******************************************************
// ******************************************************

// Promise chaining advanced concepts!!!

const add = (a, b) => {
    //We are just writing a simple function along with a promise...

    return new Promise ( (resolve, reject) => {

        setTimeout( () => {
            resolve(a+b)
        }, 2000)

    })
}

// So we wrote a function which takes in parameters a,b and return promise.
// If the promise is fulfilled then, we get the sum...
// add(2, 3).then( (sum) => {

//     console.log(sum)
//     add(sum, 5).then( (sum2) => {
//         console.log(sum2);
//     }).catch( (e) => {
//         console.log(e);
//     })

// }).catch( (e) => {
//     console.log(e)
// })

add(2, 3).then( (sum) => {
    console.log(sum);
    return add(sum, 4)
}).then( (sum2) => {
    console.log(sum2);
}).catch( (e) => {
    console.log(e);
})