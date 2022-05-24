import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryListEl = document.querySelector('.gallery')

function createNewItem() {
    return galleryItems
    .map(el => 
       `<a class="gallery__item" href="${el.original}">
        <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
     </a>`
        )
    .join('')

}

galleryListEl.insertAdjacentHTML('afterbegin', createNewItem(galleryItems))

let lightbox = new SimpleLightbox('.gallery__item', { sourceAttr: `href`, captionsData: `alt`, fadeSpeed: 250 });

const onPushAtImg = event => {
    event.preventDefault()
    open

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
          close
        }});
}

galleryListEl.addEventListener('click', onPushAtImg)