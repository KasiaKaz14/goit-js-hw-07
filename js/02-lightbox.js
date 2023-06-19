import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElements = document.querySelector(".gallery");

const galleryEl = galleryItems
  .map((item) => {
    galleryElements.insertAdjacentHTML(
      "beforeend",
      `<div class = "gallery__item">
<a class = "gallery__link" href = "${item.original}">
<img class = "gallery__image" src = "${item.preview}" alt = "${item.description}"/>
</a>
</div>`
    );
  })
  .join(" ");

const lightbox = new SimpleLightbox(".gallery a ", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryElements);
