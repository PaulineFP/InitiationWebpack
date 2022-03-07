import '../assets/stylesheets/style.css';
import {Navbar} from './components/Navbar';
import axios from "axios";
import Foo from "./components/foo";


//-----------Création d'une navbar avec insertion html full js--------------//

export default function App(){
  axios // prend en charge les navigateur plus encien
  .get("https://jsonplaceholder.typicode.com/posts")

//Exo: crée un nouveau dossier avec dedans un petit composent qui prendrait en paramettre un environment (.env)
//Au lieu de mettre en dure pour avoir juste le nom de ma variable pour pas que se soit recup
  .then((resp) => console.log(resp));

  //point d entré du DOM
  const root = document.querySelector('#root');
  let h1 = document.createElement('h1');
  h1.innerHTML = "Hello App";



  //inserer du contenue à la suite du selecteur (div)
root.append(h1);
Foo();
}

App();

  //                   \   ^__^
  //                    \  (oo)\_______
  //                       (__)\       )\/\
  //                           ||---- |
    //                         ||    ||
