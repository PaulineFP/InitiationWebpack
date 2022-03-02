//Installez le plugin clean-webpack, qui nettoie le répertoire "public" à chaque fois que le projet est construit. Cela vous permet de supprimer automatiquement les anciens fichiers dont vous n'avez plus besoin.

//clean-webpack-plugin - supprime / nettoie le répertoire de construction du projet

import CleanWebpackPlugin from "clean-webpack-plugin";

//Nous créons ici une constante appelée webpack, qui requiert le module webpack. C’est la base pour que tout fonctionne. Puis nous créons la variable path qui va nous permettre d’indiquer les bons chemins vers nos fichiers.
const path = require("path");

//Ensuite, il va falloir indiquer un point d’entrée (notre fichier index.js), c’est-à-dire le fichier qui sera lu et un point de sortie, à savoir le fichier qui sera compilé (bundle.js). Ensuite, nous allons exporter cette configuration :

//Ajoutez la propriété "plugins" aux paramètres du webpack, où nous définissons le plugin, le nom du fichier de sortie (index.html) et le modèle:
const htmlWebpackPlugin = require('html-webpack-plugin');

module.expports = {
  entry: "./src/index.js", // par défaut à ./src | Ici, l'application commence à s'exécuter et webpack commence à regrouper
  output: {
    // options liées à la façon dont webpack émet les résultats
    path: path.resolve(__dirname, "./public"),
    // le répertoire cible pour tous les fichiers de sortie doit être un chemin absolu
    publicPath: "/asset/", //'url vers le répertoire de sortie résolue par rapport à la page HTML
    filename: "./bundle.js"// le modèle de nom de fichier pour les morceaux d'entrée
  },
  devServer: {
    proxy: {'/api': 'http://localhost:3000'// URL proxy vers le serveur de développement backend
    },
   static: path.join(__dirname, 'public'),
   compress: true,// active la compression gzip
   historyApiFallback: true, // true pour index.html sur 404, objet pour plusieurs chemins
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false,
 },
 //charger le css avec css-loader
 module: {
   rules: [
     // règles pour les modules (configure loaders, parser options, etc.)
     {
       // Conditions:
       test: /\.css$/i,
       use: ["style-loader", "css-loader"],
     },
   ]
 },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    //nettoie le répertoire "public" à chaque fois que le projet est construit. Cela vous permet de supprimer automatiquement les anciens fichiers dont vous n'avez plus besoin.
  ],
}
