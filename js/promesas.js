let getUser = () => {
    return new Promise((resolve, reject) => {
        let api = 'https://jsonplaceholder.typicode.com/users';
        let request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = () => {
            if (request.status === 200) {
                resolve(JSON.parse(request.response));
            } else {
                reject(Error(request.statusText));
            }
        };
        request.onerror = err => request(err);
        request.send();
});
};

getUser().then(
    userData => console.log(userData[0]),
    err => console.log(
        new Error('Error al obtener los datos')
    ));