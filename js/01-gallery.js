import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", selectGalleryItem);

function selectGalleryItem(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  basicLightbox
    .create(
      `<img width="1400" height="900" src=${e.target.getAttribute(
        "data-source"
      )}>`
    )
    .show();
}

// gallery.addEventListener("keydown", closeModal);
// function closeModal(e) {
//   if (e.key === "Escape") {
//     basicLightbox.;
//   }
// }
