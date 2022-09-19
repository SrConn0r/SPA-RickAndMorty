import getData from "../utils/getData";
import getHash from "../utils/getHash";

const character = async () => {
  const id = await getHash();
  const dataCharacter = await getData(id);
  const view = `
        <div class="characters-inner">
            <article class="characters-card">
                <img src="${dataCharacter.image}" alt="${dataCharacter.name}">
                <h2>${dataCharacter.name}</h2>
            </article>
            <article class="characters-card">
                <h3>Episodes:<span>${dataCharacter.episode.length}</span></h3>
                <h3>Status: <span>${dataCharacter.status}</span></h3>
                <h3>Species: <span>${dataCharacter.species}</span></h3>
                <h3>Gender: <span>${dataCharacter.gender}</span></h3>
                <h3>Origin: <span>${dataCharacter.origin.name}</span></h3>
                <h3>Last location: <span>${dataCharacter.location.name}</span></h3>
            </article>
        </div>  
    `;
  return view;
};

export default character;
