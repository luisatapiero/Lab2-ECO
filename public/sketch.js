let canvas;
let SPRITE_PATH_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
let bulbasaur = null;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function draw() {
    //background(0, 50);
    background(0);
    newCursor();

    if(bulbasaur != null){
        fill(255);
        textSize(24);
        text(bulbasaur.name, 140, 100);
        image(bulbasaur.pImage, 50, 100, 100, 100);
        //image(bulbasaur.pImage, 50,40,80,80);
    }
    
}

function mouseClicked(){
    getPokemonList()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}

async function getPokemonList(){
    const POKEAPI_LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    const query = await fetch(POKEAPI_LIST_URL);
    const data = await query.json();
    const { results } = data;
/*
    console.log(data);
    console.table(results);
    console.log(results[0].name);*/
    let pokemon = results[0];
    //console.log(results[0]);
    //console.log(bulbasaur);
    //console.log(bulbasaur.url);
    let temporaryArray = pokemon.url.split('/');
    //console.log(temporaryArray);
    //console.log(bulbasaur);
    pokemon.sprite =  SPRITE_PATH_URL + temporaryArray[6] + '.png';
    //console.log(bulbasaur);
    loadImage(pokemon.sprite, image => {
        pokemon.pImage = image;
        console.log(pokemon);
        bulbasaur = pokemon;
    });

}
