const getData = async() => {
    await axios.get('https://jsonplaceholder.typicode.com/users').then((results) => {
        console.log("data", results)
        let res = `<tr>` +
            `<th>ID</th>` +
            `<th>Name</th>` +
            `<th>Username</th>` +
            `<th>Email</th>` +
            `<th>Phone</th>` +
            `<th>Website</th>` +
            `</tr>`;
        for (output in results.data) {
            res += `<tr>` +
                `<td>${results.data[output].id}` +
                `<td>${results.data[output].name}</td>` +
                `<td>${results.data[output].username}</td>` +
                `<td>${results.data[output].email}</td>` +
                `<td>${results.data[output].phone}</td>` +
                `<td>${results.data[output].website}</td>` +
                `</tr>`
        }

        document.getElementsByClassName('display')[0].innerHTML = res;
    })
};
getData();