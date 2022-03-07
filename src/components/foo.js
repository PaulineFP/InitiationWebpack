const arrayObject = [
  {
    _id: 0,
    name: 'adedd'
  },
  {
    _id: 1,
    name: 'azertyu'
  },
  {
    _id: 2,
    name: 'nbvcx'
  }
];

const objOfObj = {
  3: {
    _id: 3,
    name: 'dfghjkl'
  },
  4: {
    _id: 4,
    name: 'sdxfcgvhjk'
  },
  5: {
    _id: 9,
    name: 'tryuiop'
  },
};


const Foo = () => {
  const root = document.querySelector('#root');
  let h1 = document.createElement('h1');
  h1.innerHTML = "Fooooooooo";
 let br = document.createElement('br');
let arrayObj = arrayObject.map((value) => {
  return value._id + value.name;
});
//appeler l'object et cibler la valeur
let oBj = objOfObj[3]._id + objOfObj[3].name;
  root.append(h1, arrayObj, br, oBj);
}

export default Foo;
