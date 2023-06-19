import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const images = galleryItems
  .map(
    (image) =>
      `<div class = "gallery__item"><a class = "gallery__link" href = "${image.original}"><img class = "gallery__image" data-source = "${image.original}" src = "${image.preview}"/></a></div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", images);
console.log(gallery);
