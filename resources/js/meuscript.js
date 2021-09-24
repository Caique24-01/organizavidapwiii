alert("meu script");

let url = 'https://swapi.dev/api/people/'

fetch(url + '2').then((response) => {
    return response.json();
}).then((data) => {
    console.dir(data);
})