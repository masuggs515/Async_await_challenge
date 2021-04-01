$btn = $('#get-pokemon');

// Part 1

async function allPokemon(){
    let res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=800');
    console.log(res.data.results)
    console.log(res.data)
}

// Part 2 

async function threePokemon(){
    let res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=800');
   
    let pokeList = await Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*res.data.results.length)}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*res.data.results.length)}`),       
        axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*res.data.results.length)}`),
    ])
    for(let i=0; i<3; i++){
        let imgSrc = pokeList[i].data.sprites.front_default;
        console.log(imgSrc);
        let name = pokeList[i].data.name;
        console.log(name)
        $('#pokemon').append(`
        <div>
            <h4>${name}</h4>
            <img src="${imgSrc}" alt="">
        </div>
        `)

    }
}

$btn.on('click', threePokemon)