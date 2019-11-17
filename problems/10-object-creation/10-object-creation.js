/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let objLit={
    name:value,
    age:value
}

function objFun(age,name){
    this.age=age
    this.name=name

}

class objCla{

constructor(name,age){
    this.age=age
    this.name=name
}

}