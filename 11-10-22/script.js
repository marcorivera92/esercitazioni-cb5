const bodyEl = document.querySelector("body");
const pokemonContainer = document.querySelector(".pokemon_container");

// Loading feature
const loadingEl = document.querySelector(".loading");

let i = 1;
let urlPoke = `https://pokeapi.co/api/v2/pokemon/${i}`;

fetch(urlPoke)
  .then((res) => res.json())
  .then((res) => createPokemonCard(res));

// Card HTML constnts
const cardBlock = document.createElement("div");
const cardEl = document.createElement("div");
const cardImgEl = document.createElement("img");
const cardNameEl = document.createElement("h2");
const cardDesc = document.createElement("div");
const cardIdEl = document.createElement("h4");
const cardTypeEl = document.createElement("p");
// Card Append data
const createPokemonCard = (data) => {
  cardBlock.className = "card_block";
  cardEl.className = "card";
  cardDesc.className = "card_info";
  cardImgEl.setAttribute(
    "src",
    data.sprites.other.dream_world["front_default"]
  );
  cardImgEl.setAttribute("alt", data.name);
  cardNameEl.textContent = data.name;
  cardIdEl.textContent = "#" + createId(data.id);
  cardTypeEl.textContent = "Type: " + data.types.map((type) => type.type.name);

  // Assign specific color to each card type
  const colorCard = colors[data.types[0].type.name];
  cardBlock.style.background = colorCard;

  // Assign "0" to IDs
  function createId(id) {
    if (!id) return null;
    if (id < 10) {
      return `00${id}`;
    } else if (id < 100) {
      return `0${id}`;
    }
    return id;
  }

  // Append card elements to HTML body
  cardEl.append(cardImgEl);
  cardDesc.append(cardIdEl, cardNameEl, cardTypeEl);
  cardBlock.append(cardEl, cardDesc);
  pokemonContainer.append(cardBlock);
  bodyEl.append(pokemonContainer);
};

// Pokemon Card Creation
const PokedexEl = document.querySelector("pokemon_container");

// Color palette of each Pokemon type
const colors = {
  electric: "#F7D02C",
  water: "#6390F0",
  ground: "#E2BF65",
  rock: "#B6A136",
  fairy: "#D685AD",
  poison: "#A33EA1",
  bug: "#A6B91A",
  dragon: "#6F35FC",
  psychic: "#F95587",
  flying: "#A98FF3",
  fighting: "#C22E28",
  normal: "#A8A77A",
  fire: "#EE8130",
  grass: "#7AC74C",
  ghost: "#735797",
  ice: "#96D9D6",
  dark: "#705746",
  steel: "#B7B7CE",
};

// Button Functionality
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

btnNext.addEventListener("click", () => {
  i++;
  let urlPoke = `https://pokeapi.co/api/v2/pokemon/${i}`;

  fetch(urlPoke)
    .then((res) => res.json())
    .then((res) => createPokemonCard(res));
});

btnPrev.addEventListener("click", () => {
  i--;
  let urlPoke = `https://pokeapi.co/api/v2/pokemon/${i}`;

  fetch(urlPoke)
    .then((res) => res.json())
    .then((res) => createPokemonCard(res));
});
