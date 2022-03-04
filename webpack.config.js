//Installez le plugin clean-webpack, qui nettoie le répertoire "public" à chaque fois que le projet est construit. Cela vous permet de supprimer automatiquement les anciens fichiers dont vous n'avez plus besoin.

//clean-webpack-plugin - supprime / nettoie le répertoire de construction du projet

// const CleanWebpackPlugin = require("clean-webpack-plugin");
//Nous créons ici une constante appelée webpack, qui requiert le module webpack. C’est la base pour que tout fonctionne. Puis nous créons la variable path qui va nous permettre d’indiquer les bons chemins vers nos fichiers.
const path = require("path");

//Ensuite, il va falloir indiquer un point d’entrée (notre fichier index.js), c’est-à-dire le fichier qui sera lu et un point de sortie, à savoir le fichier qui sera compilé (bundle.js). Ensuite, nous allons exporter cette configuration :

//Ajoutez la propriété "plugins" aux paramètres du webpack, où nous définissons le plugin, le nom du fichier de sortie (index.html) et le modèle:
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js", // par défaut à ./src | Ici, l'application commence à s'exécuter et webpack commence à regrouper
  output: {
    // options liées à la façon dont webpack émet les résultats
    path: path.resolve(__dirname, "./public"),
    // le répertoire cible pour tous les fichiers de sortie doit être un chemin absolu
    publicPath: "/asset/", //'url vers le répertoire de sortie résolue par rapport à la page HTML
    filename: "[name].bundle.js",// le modèle de nom de fichier pour les morceaux d'entrée
  },
  externals: {
    "react": 'React',
  },
  mode: 'development',
  devServer: {
   // static: {path.join(__dirname, './public')},
   static: "./public",
   //compress: true,// active la compression gzip
  // open: true,
  // historyApiFallback: true, // true pour index.html sur 404, objet pour plusieurs chemins
   // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
   // https: false,
   port: 3000,
 },
 //charger le css avec css-loader
 module: {
   rules: [
     // règles pour les modules (configure loaders, parser options, etc.)
     // Conditions:
     {
      //initiaiton de babel-loader
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
     {
       //CSS,
       test: /\.(scss|css)$/,
       use: ["style-loader", "css-loader"],
     },
  ],
 },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
     // CleanWebpackPlugin(),
    //nettoie le répertoire "public" à chaque fois que le projet est construit. Cela vous permet de supprimer automatiquement les anciens fichiers dont vous n'avez plus besoin.

  ],
}
