
const doCallBack = (callback) => {
    setTimeout(() => {
        
        //After the 2000 ms the below code is going to be executed.
        //It is our choice whether to send error or result.
        // callback('This is an error', undefined); //Here we are sending error.
        callback(undefined, [1, 2, 3]); //Here we are sending result.
    }, 2000);
}

//The above code snippet was the definition of the doCallBack function.
//Now let's call it.

doCallBack((error, result) => {
    if(error)
    return console.log(error);

    //If no error then print the result.
    console.log(result);
})