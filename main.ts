// union type 
// by using this sign "|" we can add multiple type of data in one variable
let a :string | number |boolean  = " hareem "
// a = 10 
// a = "hareem"
// a = true
 

let age_ :  number |string ="28"
console.log (typeof age_)


// narrowing
let age :string|number
age = 28
console.log(age.toFixed(2))


// wrong method
let _age :string |number =2 
// if (typeof _age ==="string") {
//     _age.toUpperCase()
// }else {
//     _age.
// }


// correct method
console.log(Math.random())
let newAge = Math.random() > 0.1 ?28 : "6"
if (typeof newAge === "string"){
    console.log(newAge.toUpperCase())
} else{
   console.log( newAge.toFixed(2))
}


// we can't change the type 
let trafficLigth:"yellow"|"red"|"green"= "green"
console.log(trafficLigth)


// objects 
let teacher :{
    name:string,
    salary: number,
    "full-name":string
}={
    name:"hareem ",
    salary:17000,
    "full-name":"Hareem zafar"
}
teacher.name
console.log(teacher["full-name"])


type Student = {
    name: string,
    age: number
}

let student1: Student = {
    name: "lily",
    age: 18
}
let student2: Student = {
    name: "bela",
    age: 28
}


interface Deal1  {
    food: string,
}
type Deal2 = {
    food: string,
    drink: string
}

let belaOrder: Deal1 = {
    food: "Biryani"
}
let lilyOrder: Deal2 = {
    food: "Biryani",
    drink: "Coke"
}
belaOrder=lilyOrder // NO ERROR // ignoring extra property
// belaOrder=lilyOrder // ERROR - MISSING PROPERTY