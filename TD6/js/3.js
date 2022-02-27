
async function display() {
    return "Hello World!"
}

display().then((res) => {
    setTimeout(() => {
        console.log(res);
    }, 5000);
})
console.log(display());