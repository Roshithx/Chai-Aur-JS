

const Heroes=["SpiderMan","IronMan","Batman"]

const myArray1 = new Array(1,2,3,4)

//Array methods
Heroes.push("Ant-man") // add element into end of array


myArray1.pop()  // delete element end of array
console.log(myArray1);

Heroes.unshift("Dr Doom") // add element into start of array
console.log(Heroes);

Heroes.shift()     // delete element in start
console.log(Heroes);

const newA=Heroes.join()  // converts array in strings 
console.log(newA);

const Array=[0,1,2,3,4,5,6,7]
const Arr2=Array.slice(1,3) //skips last index end
console.log(Arr2);

const Arr3=Array.splice(1,3) // does not skip but change the og array
console.log(Arr3); 
console.log(Array);











