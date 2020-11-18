// ////////////////////////////////////////////////////////////////////////
//            questo è il mio file entry-point per webpack
// ////////////////////////////////////////////////////////////////////////

require("./assets/favicon.ico"); // importo la favicon

import "./scssStyle.scss"; // importo il file scss
import "./style.css"; // importo il file css

import "bootstrap/dist/css/bootstrap.min.css"; // importo bootstrap

import webpackImg from "./assets/webpack.png"; // importo un'immagine


import logOnConsole from "./module1"; // importo la funzione logOnConsole() dal file module1.js

// crea del codice HTML
function buildTitle() {
  // creo un div che poi vado ad inserite in pagina nel tag "header"
  const divInHeader = document.createElement("div"); // creo un div
  divInHeader.innerHTML =
    "<h1>Appunti su webpack 5</h1><h3>JS Module Bundler</h3> <h6>NOTA: questo pagina è un esercizio ed è stata realizzata con webpack. <br> GitHub Repository: <a target='_blank' rel='noopener noreferrer' href='https://github.com/renzocarara/webpack-notes'>webpack-notes</a> </h6>";
  divInHeader.classList.add("headerTitle"); // aggiungo la classe CSS "headerTitle"

  return divInHeader;
}

// crea del codice HTML
function buildButton() {
  // creo un button che poi vado ad inserite in pagina nel p con id="example"

  const btn = document.createElement("button"); // creo un bottone
  btn.innerHTML = "Scrivi in Console..."; // aggiungo del testo all'interno del bottone
  btn.onclick = logOnConsole; //NOTA: il nome funzione è senza "tonde" altrimenti la invocherei qui!!
  btn.classList.add("myButton"); // aggiungo la classe CSS "myButton"

  return btn;
}

const myImg = new Image(); // creo un "nodo" immagine
myImg.src = webpackImg; // setto l'attributo src del tag "img" con l'immagine importata dalla cartella assets
myImg.id = "webpack-img"; // setto l'attributo id dell'immagine

const headerTags = document.getElementsByTagName("header"); // estraggo il riferimento all'elemento "header"

headerTags[0].appendChild(myImg); // aggiungo l'immagine all'elemento "header"
headerTags[0].appendChild(buildTitle()); // aggiungo il titolo  nell'elemento "header"

const exampleParagraph = document.getElementById("example"); // estraggo il riferimento all'elemento con id "example"
exampleParagraph.appendChild(buildButton()); // aggiungo il bottone nell'elemento con id="example"
