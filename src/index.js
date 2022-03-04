import '../assets/stylesheets/style.css';
import {Navbar} from './components/Navbar';
import axios from "axios";



//-----------Création d'une navbar avec insertion html full js--------------//

export default function App(){
  axios // prend en charge les navigateur plus encien
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((resp) => console.log(resp));

  //point d entré du DOM
  const root = document.querySelector('#root');
  let h1 = document.createElement('h1');
  h1.innerHTML = "Hello App";



  //inserer du contenue à la suite du selecteur (div)
root.append(h1, Navbar());


}

App();

  //                   \   ^__^
  //                    \  (oo)\_______
  //                       (__)\       )\/\
  //                           ||---- |
    //                         ||    ||
