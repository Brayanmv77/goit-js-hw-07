import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

//ESTE CODIGO CREA LA GALLERIA ENTERA
for (let galleryItem of galleryItems) {
  // Creo el la etiqueta li con su clase gallery__item
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  // Creo el la etiqueta img con su clase y datos correspondientes tomados del array
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = galleryItem.preview;
  image.setAttribute("data-source", galleryItem.original);
  image.alt = galleryItem.description;

  //Las clases creadas anteriormente se organizan con estos metodos
  listItem.appendChild(image);
  gallery.append(listItem);
}

//EVENTO PARA USAR LIGHTBOX
gallery.addEventListener("click", galleryClick);

function galleryClick(event){
  event.preventDefault();

if(event.target.nodeName !== "IMG"){
  return;
}

const modalImage = event.target.getAttribute("data-source");
const instance = basicLightbox.create(`
    <img src="${modalImage}">
`)

instance.show()
}