alert("meu script");

let url = 'https://swapi.dev/api/pessoas/'

fetch(url + '1').then(function(response){
    console.log(response)
})