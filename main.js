let API_URL = 'https://rickandmortyapi.com/api/character';

const scrollTarget = document.querySelector('.scroll-target');
const itemContainer = document.querySelector('#item-container');
const intersectionOptions = {
    threshold: 1
}
let loading = false;
const parameters = {
    mode: 'cors',
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}
const onIntersec = ([entry]) => {
    if (API_URL && !loading && entry.isIntersecting) {
        makeRequest();
    }
}
async function makeRequest() {
    loading = true;
    const response = await fetch(API_URL, parameters)
    const data = await response.json();
    cleanUp(data.info.next);
    renderItems(data.results);
}

const cleanUp = nextPage => {
    API_URL = nextPage;
    loading = false;
}

const renderItems = results => {
    results.map(item => {
        itemContainer.appendChild(createItem(item));
    });
}

const createItem = item => {
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = (
        `
            <img class="char-img" src=${item.image} />
            <div class="char-id">${item.id}</div>
            <div class="char-name">${item.name}</div>
            <div class="char-status">${item.status}</div>
            <div class="char-species">${item.species}</div>
        `
    );
    return newItem;
}

let observer = new IntersectionObserver(onIntersec, intersectionOptions);
observer.observe(scrollTarget)


