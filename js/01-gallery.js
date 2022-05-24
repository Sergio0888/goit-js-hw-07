import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery')

function createNewItem() {
    return galleryItems
    .map(el => 
       ` <div class="gallery__item">
        <a class="gallery__link" href=${el.original}>
        <img
          class="gallery__image"
          src=${el.preview}
          data-source=${el.original}
          alt=${el.description}
        />
      </a>
    </div>`
        )
    .join('')

}

galleryListEl.insertAdjacentHTML('afterbegin', createNewItem(galleryItems))

console.log(galleryItems);


const onPushAtImg = event => {
  event.preventDefault()
  event.target.src = event.target.dataset.source

  const instance = basicLightbox.create(`
    <img src="${event.target.src}">
`)

    
    if (event.target.nodeName !== 'IMG') {
        return
    }

    instance.show()
    
    document.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        instance.close()
      }});
}

galleryListEl.addEventListener('click', onPushAtImg)
