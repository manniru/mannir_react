import config from './config'
import firebaseApp from './firebase'
import agp from './agp/agp'

const print = (p1, p2) => {
  console.log(p1)
}

//18879.04
//https://www.bitstamp.net/api/ticker/
//last: "18947.62",

const Bitstamp = (p1=null) => {
  fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
    });

}

const iterate = (p1) => {
  p1.map((d, i) => console.log(d.programme))
}

//console.log(agp.programmes[0])

iterate(agp.programmes)