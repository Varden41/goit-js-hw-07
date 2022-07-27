import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  const galleryClick = evt.target.classList.contains("gallery__image");

  if (!galleryClick) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1200" height="900">
`);
  instance.show();

  if (basicLightbox.visible) {
    document.addEventListener("keydown", closeModal);
  }
  function closeModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
console.dir(basicLightbox);
