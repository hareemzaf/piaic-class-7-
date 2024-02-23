// union type 
// by using this sign "|" we can add multiple type of data in one variable
var a = " hareem ";
// a = 10 
// a = "hareem"
// a = true
var age_ = "28";
console.log(typeof age_);
// narrowing
var age;
age = 28;
console.log(age.toFixed(2));
// wrong method
var _age = 2;
// if (typeof _age ==="string") {
//     _age.toUpperCase()
// }else {
//     _age.
// }
// correct method
console.log(Math.random());
var newAge = Math.random() > 0.1 ? 28 : "6";
if (typeof newAge === "string") {
    console.log(newAge.toUpperCase());
}
else {
    console.log(newAge.toFixed(2));
}
// we can't change the type 
var trafficLigth = "green";
console.log(trafficLigth);
// objects 
var teacher = {
    name: "hareem ",
    salary: 17000,
    "full-name": "Hareem zafar"
};
teacher.name;
console.log(teacher["full-name"]);
var student1 = {
    name: "lily",
    age: 18
};
var student2 = {
    name: "bela",
    age: 28
};
var belaOrder = {
    food: "Biryani"
};
var lilyOrder = {
    food: "Biryani",
    drink: "Coke"
};
belaOrder = lilyOrder; // NO ERROR // ignoring extra property
// belaOrder=lilyOrder // ERROR - MISSING PROPERTY
