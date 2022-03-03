import '../assets/stylesheets/style.css';

import axios from "axios";

axios // prend en charge les navigateur plus encien 
.get("https://jsonplaceholder.typicode.com/posts")
.then((resp) => console.log(resp));

//    DOM
const root = document.querySelector('#root')
root.append(heading)
