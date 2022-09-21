"use strict";
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const imageList = [];
for (const galleryItem of galleryItems) {
  const link = document.createElement("a");
  link.classList.add("gallery__item");
  link.setAttribute("href", `${galleryItem.original}`);
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("src", `${galleryItem.preview}`);
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
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
