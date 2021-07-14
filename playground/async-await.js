// Await can only be used with async functions.
// Adding async keywords makes the function to return a promise.
// This promise can be detected using then and catch methods.


const add = (a, b) => {
    //We are just writing a simple function along with a promise...

    return new Promise ( (resolve, reject) => {

        setTimeout( () => {
            if(a<0 || b<0)
                reject('Negative number found lol...')
            else
                resolve(a+b)
        }, 2000)

    })
} 

// Let us declare a simple async function.
// Let us also use await.
// await can only be used inside functions declared as async.
// Await basically avoids the use of promise chaining!! because promise chaining is messy.
const doWork = async () => {
    // return "HELLO"
    // return new Error('Just an error...')
    const sum = await add(2, 3)
    const sum2 = await add(sum, 5)
    const sum3 = await add(sum2, 10)
    return sum3  //Since it is async, sum3 is returned as a promise.
}

// console.log(doWork()); //Let's use then() method instead of directly calling it.
// As you can see there was no use of any promise chaining, use of then and catch for each time we call add()
// But what if it rejects? See above.
doWork().then( (result) => {
    console.log('Result: ', result);
}).catch((e) => {
    console.log('Error: ', e);
})



// Now go to the promise chaining.js and see how it was implemented there with 'user' model.
