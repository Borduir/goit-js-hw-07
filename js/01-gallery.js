"use strict";
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const imageList = [];
for (const galleryItem of galleryItems) {
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.setAttribute("href", `${galleryItem.original}`);
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("src", `${galleryItem.preview}`);
  img.setAttribute("data-source", `${galleryItem.original}`);
  img.setAttribute("alt", `${galleryItem.description}`);
  imageList.push(link);
  link.appendChild(img);
}
gallery.append(...imageList);

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
