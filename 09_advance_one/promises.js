const promiseOne = new Promise(function(resolve, reject) {
    // Do an asynchronous task
    // DB calls, network requests, etc.

    setTimeout(function() {
        console.log("Task completed");
        resolve();
    }, 2000);
});

promiseOne.then(function() {
    console.log("Promise consumed");
});