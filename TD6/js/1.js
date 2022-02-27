let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Hello World!");
    }, 5000);
})

promise.then(function() {
    console.log('success', promise);    
}).catch(function() {
    console.log('fail', promise);
})