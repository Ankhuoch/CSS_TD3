let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("promise1");
    }, 2000);
})

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("promise2");
    }, 4000);
})

let promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("promise3");
    }, 6000);
})

let promise4 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("promise4");
    }, 8000);
})

let promise5 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("promise5");
    }, 10000);
})

Promise.all([promise1,promise2,promise3,promise4,promise5]).then((res) => {
    console.log(res);
    console.log("All tasks are ready!");
})