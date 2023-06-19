import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const images = galleryItems
  .map(
    (image) =>
      `<div class = "gallery__item">
      <a class = "gallery__link" href = "${image.original}">
      <img class = "gallery__image" 
      data-source = "${image.original}" 
      src = "${image.preview}" 
      alt = "${image.description}"/>
      </a>
      </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", images);
console.log(gallery);

gallery.addEventListener("click", (e) => {
  event.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  const escapeKey = (e) => {
    if (e.key === "Escape") instance.close();
  };
  const instance = basicLightbox.create(
    `<img src = "${e.target.dataset.source}"/>`,
    {
      onShow: () => {
        document.addEventListener("keydown", escapeKey);
      },
      onClose: () => {
        document.removeEventListener("keydown", escapeKey);
      },
    }
  );

  instance.show();
});
