const API_KEY = '8f5cb789968ba70de1bf09bc1bf0aa979af568b6dd64a9a9c27758556041d409';
const BASE_URL = 'https://api.unsplash.com';

const imagesElem = document.querySelector('#images');

function createImageElem(image) {
    const imageElem = document.createElement('img'); // Skapar en img - tagg
    imageElem.setAttribute('src', image.urls.thumb);
    imagesElem.append(imageElem);
}

function displayImages(images) {
    for(const image of images) {
        createImageElem(image);
    }
}

async function getPhotos() {
    const response = await fetch(`${BASE_URL}/search/photos?client_id=${API_KEY}&query=cat&per_page=50`);
    const data = await response.json();
    console.log(data);

    displayImages(data.results);
}

getPhotos();