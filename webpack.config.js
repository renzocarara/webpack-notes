// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                        file di configurazione di WebPack
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://github.com/webpack/webpack-cli/issues/1918
// AL MOMENTO 20/10/2020 C'E' UN BUG IN WEBPACK-CLI v.4.x
// vengono generati dei DeprecationWarning, in particolare quando uso il WATCH o il WEBPACK SERVE
//
// WEBPACK SERVE
// webpack-dev-server doesn't write any output files after compiling.
// Instead, it keeps bundle files in memory and serves them as if they were real files
// mounted at the server's root path.

const path = require("path"); //path è un modulo di Node
const HtmlWebpackPlugin = require("html-webpack-plugin"); // questo è un plugin di Webpack
// const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // questo è un plugin di Webpack - Notare le graffe

module.exports = {
  // se non lo specifico il "mode" di default è production
  mode: "development",

  // questi sono gli entrypoint, cioè i file sorgente.
  entry: {
    // le chiavi 'app' e 'module1' (cioè i nomi delle proprietà dell'oggetto)
    // vengono poi utilizzati per nominare i bundle che verrano generati in output
    // e quindi in index.html dove includo gli <script> troverò appunto questi nomi
    app: "./src/index.js",
    module1: "./src/module1.js",
  },

  // per generare una SourceMap x facilitare il debugging
  devtool: "inline-source-map",

  // con questo setting, webpack compila e poi va in watch... >npm run build (è come fosse watch)
  // watch: true,

  // specifico quali plugin voglio utilizzare
  plugins: [
    // questo plugin mi aggiorna/crea automaticamente il file index.html con tutti i chunks che vengono generati
    // ogni volta che compilo, aggiungendo cioè i tag <script></script> che caricano i chunk generati
    // NOTA: gli passo come parametro un "template" per il file index.html che verrà creato/aggiornato
    // nella cartella "dist", altrimenti mi genererebbe/creerebbe un file index.html da zero
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    // questo plugin cancella i file "vecchi" che non fanno parte del bundle generato da webpack, nella cartella "dist"
    // ATTENZIONE: sembra dare problemi quando usato con l'opzione "WATCH" o con la funzionalità "WEBPACK SERVE"
    // new CleanWebpackPlugin(),
  ],

  // specifico percorso  e nome dell'output
  output: {
    // genero un bundle costituito da più files (chunks)
    // '[name]' indica una variabile, la costruzione del nome del chunk è dinamica
    // la variabile assume i valori dei nomi specificati nell'oggetto "entry" definito qui sopra
    // che coincidono con i nomi dei chunk specificati nei tag <script></script> all'interno di index.html
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"), // cartella di destinazione per l'output
  },

  // specifico quali loaders caricare in base a ciò che mi serve
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i, // regExp : specifico "tutti i file scss o sass"
        use: ["style-loader", "css-loader", "sass-loader"], // loaders per i file scss/sass
      },
      {
        test: /\.css$/, // regExp : specifico "tutti i file css"
        use: ["style-loader", "css-loader"], // elenco loader per i file css
      },
    ],
  },
};
