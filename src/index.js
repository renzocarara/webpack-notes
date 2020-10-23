// ////////////////////////////////////////////////////////////////////////
//            questo è il mio file entry-point per webpack
// ////////////////////////////////////////////////////////////////////////

import "./scssStyle.scss"; // importo il file scss
import "./style.css"; // importo il file css

import "bootstrap/dist/css/bootstrap.min.css"; // importo bootstrap

import logOnConsole from "./module1"; // importo la funzione logOnConsole() dal file module1.js

// crea del codice HTML
function buildTitle() {
  // creo un div che poi vado ad inserite in pagina nel tag "header"
  const divInHeader = document.createElement("div"); // creo un div
  divInHeader.innerHTML =
    "<h1>Appunti su Webpack (v.5.1.3)</h1><h3>Module Bundler</h3> <h6>NOTA: questo pagina è stata realizzata con Webpack. <br> Si prenda ad esempio la struttura cartelle ed i files di questa repo: <a target='_blank' rel='noopener noreferrer' href='https://github.com/renzocarara/webpack-notes'>webpack-notes</a> </h6>";
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

const headerTags = document.getElementsByTagName("header"); // estraggo il riferimento all'elemento "header"
headerTags[0].appendChild(buildTitle()); // aggiungo il codice in pagina nell'elemento "header"
const exampleParagraph = document.getElementById("example"); // estraggo il riferimento all'elemento con id "example"
exampleParagraph.appendChild(buildButton()); // aggiungo il bottone nell'elemento con id="example"
