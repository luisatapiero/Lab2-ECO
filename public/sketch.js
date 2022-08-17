let canvas;
let SPRITE_PATH_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
let pokedex = null;
let pokemonInfo = [];

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
    getPokemonList();
}

function draw() {
    //background(0, 50);
    background(0);
    newCursor();

    /*if(bulbasaur != null){
        fill(255);
        textSize(24);
        text(bulbasaur.name, 140, 100);
        image(bulbasaur.pImage, 50, 100, 100, 100);
    }*/

    if (pokedex != null) {
        fill(255);
        textSize(14);
        textAlign(CENTER, RIGHT);
        imageMode(CENTER);
        for (let poke = 0; poke < pokemonInfo.length; poke++) {
            text(pokemonInfo[poke].name, 150, 75 * poke + 50);
            image(pokemonInfo[poke].pImage, 50, 75 * poke + 50, 70, 70);

        }

    }

}

function mouseClicked() {
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}

async function getPokemonList() {
    const POKEAPI_LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    const query = await fetch(POKEAPI_LIST_URL);
    const data = await query.json();
    const {
        results
    } = data;

    
    //console.log('este es tempArray ' + temporaryArray[6]);

    for (let i = 1; i < 10; i++) {
        //const pokeNum = array[index];
        let pokemon = results[i-1];
        let temporaryArray = pokemon.url.split('/');

        pokemon.sprite = SPRITE_PATH_URL + temporaryArray[6]+ '.png';
        console.log(pokemon.sprite);
        loadImage(pokemon.sprite, image => {
            pokemon.pImage = image;
            console.log(pokemon);
            pokedex = pokemon;
            
            pokemonInfo[i-1] = pokedex;
            
        });

        //pokemon = null;
        //bulbasaur = null;

    }

    


}

function createButtons() {

    let buttonBulbasaur = createButton('Ver habilidades');
    buttonBulbasaur.position(220, 520);
    buttonBulbasaur.size(180, 50);
    buttonBulbasaur.style('font-size', '15px');
    buttonBulbasaur.style('color', color(224, 222, 218));
    buttonBulbasaur.style('background-color', color(248, 50, 107));
    buttonBulbasaur.style('border-color', color(248, 50, 107));
    buttonBulbasaur.mousePressed(generateBulbasaurInfo);

    let buttonUser = createButton('Random user 🤷🏻‍♀️');
    buttonUser.position(450, 520);
    buttonUser.size(180, 50);
    buttonUser.style('font-size', '15px');
    buttonUser.style('color', color(224, 222, 218));
    buttonUser.style('background-color', color(248, 50, 107));
    buttonUser.style('border-color', color(248, 50, 107));
    buttonUser.mousePressed(generateRandomUser);

    let buttonBitcoin = createButton('Bitcoin price 💲');
    buttonBitcoin.position(680, 520);
    buttonBitcoin.size(180, 50);
    buttonBitcoin.style('font-size', '15px');
    buttonBitcoin.style('color', color(224, 222, 218));
    buttonBitcoin.style('background-color', color(248, 50, 107));
    buttonBitcoin.style('border-color', color(248, 50, 107));
    buttonBitcoin.mousePressed(generateBitcoinPrice);

    let buttonUS = createButton('US population 🌎');
    buttonUS.position(910, 520);
    buttonUS.size(180, 50);
    buttonUS.style('font-size', '15px');
    buttonUS.style('color', color(224, 222, 218));
    buttonUS.style('background-color', color(248, 50, 107));
    buttonUS.style('border-color', color(248, 50, 107));
    buttonUS.mousePressed(generateUSPopulation);

    let buttonDog = createButton('Dog image 🐶');
    buttonDog.position(1140, 520);
    buttonDog.size(180, 50);
    buttonDog.style('font-size', '15px');
    buttonDog.style('color', color(224, 222, 218));
    buttonDog.style('background-color', color(248, 50, 107));
    buttonDog.style('border-color', color(248, 50, 107));
    buttonDog.mousePressed(generateDogImage);

}

function generateBulbasaurInfo() {
    
}