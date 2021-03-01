let pokedex = document.getElementById('pokedex');


const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.json())
    .then((data) => {
        for(let i = 0; i < 151; i++){
            fetch(data.results[i].url)
                .then((res) => res.json())
                .then((data) => {
                    let name = data.name;
                    let weight = data.weight;
                    let height = data.height;
                    let id = data.id;
                    let type = data.types[0].type.name;
                    let img = data.sprites.other.dream_world.front_default;
                    var card = document.createElement("article");
                    card.classList.add('pokemon-card');
                    card.innerHTML = 
                    `
                    <header class="header-card">
                        <h2 class="name">${name}</h2>
                        <h3 class="id">#${id}</h3>
                    </header>
                    <div class="body-card">
                        <img class="img" src="${img}" alt="pokemon" />
                    </div>
                    <footer class="footer-card">
                        <h3 class="type">Type :${type}</h3>
                        <h3 class="height">Height :${height}</h3>
                        <h3 class="weight">weight :${weight}</h3>
                    </footer>
                    `
                    pokedex.append(card);
            });      
        };
    });
};  


getPokemon();