import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
let lightbox;

const images = galleryItems.map((item) => {
    return `<li>
                <div class="gallery__item">
                    <a class="gallery__link" href="${item.original}">
                        <img
                        class="gallery__image"
                        src="${item.preview}"
                        data-source="${item.original}"
                        alt="${item.description}"
                        />
                    </a>
                </div>
            </li>`    
});
galleryContainer.insertAdjacentHTML("afterbegin", images.join(""));

function closePreview(event) {
    if (event.key === "Escape") {
        lightbox.close();
        removeEventListener("keydown", closePreview);
    }
}

function handleClick(event) {
    event.preventDefault();
    if (event.target.classList.contains("gallery__image")) {
        let selectedImage = event.target.dataset.source;
        lightbox = basicLightbox.create(`<img width="1400" height="900" src=${selectedImage}>`);
        lightbox.show();
        document.addEventListener("keydown", closePreview);
    }
}


galleryContainer.addEventListener("click", handleClick);
console.log(galleryItems);
