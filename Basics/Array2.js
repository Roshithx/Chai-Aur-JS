const marvel=["thor","Ironman","SpiderMan"]
const dc=["batman","flash","Superman"]

// const allhero=marvel.concat(dc)
// console.log(allhero); 

const allhero=[...marvel,...dc] //spread operator combines arrrays alternative to concat
console.log(allhero);


const numArr=[1,2,3,[5,6],[6,7,8,[4,67]]]
let res=numArr.flat(Infinity) //convert arry to 1D array
console.log(res);


console.log(Array.isArray("Hello"));  //checks if its  an array 

console.log(Array.from("Hello"));
console.log(Array.from({key:"hi"}));


let sc=1
let sc2=2
console.log(Array.of(sc,sc2));






