alert("meu script");

let url = 'https://swapi.dev/api/people/1/?format=api'

fetch(url).then(function(response){
    console.log(response)
})