//Nous créons ici une constante appelée webpack, qui requiert le module webpack. C’est la base pour que tout fonctionne. Puis nous créons la variable path qui va nous permettre d’indiquer les bons chemins vers nos fichiers.
const webpack = require("webpack");
const path = require("path");
//Ensuite, il va falloir indiquer un point d’entrée (notre fichier index.js), c’est-à-dire le fichier qui sera lu et un point de sortie, à savoir le fichier qui sera compilé (bundle.js). Ensuite, nous allons exporter cette configuration :

let config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./bundle.js"
  }
}

module.exports = config;

//Ajoutez la propriété "plugins" aux paramètres du webpack, où nous définissons le plugin, le nom du fichier de sortie (index.html) et le modèle:
const htmlWebpackPlugin = require('html-webpack-plugin');

module.expports = {
  plugins: [
    new htmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
    }),
  ],
}
//Installez le plugin clean-webpack, qui nettoie le répertoire "dist" à chaque fois que le projet est construit. Cela vous permet de supprimer automatiquement les anciens fichiers dont vous n'avez plus besoin.

//clean-webpack-plugin - supprime / nettoie le répertoire de construction du projet
