
let names="roshi"
let newname=names
newname="Roshith"
console.log(names);
console.log(newname);

let user={
    email:"abc@gmail.com",
    upi:"6238428920ybl"
}

let user1=user
console.log(user1);
user1.email="rosh@gmail"
console.log(user.email);

//  Memory in JavaScript:
// - stack(Primitive) : we get a copy of variable declarations
// - Heap (Non-Primitive) : we get orginal value of variable

