import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(`ul.gallery`);

const images = galleryItems.map((item) => {
    return `<li>
                <a class="gallery__item" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>
            </li>`;    
});
galleryContainer.insertAdjacentHTML('beforeend', images.join(""));

const galleryImage = document.querySelectorAll(".gallery__item");


new SimpleLightbox(galleryImage, {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
})


console.log(galleryItems);


