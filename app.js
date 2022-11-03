// Let's get some user data from an api using fetch

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
