// Object.create ile Kalıtım sağlamak.

// const obj = {
//     test1 : ()=> console.log("Test 1"),
//     test2 : ()=> console.log("Test 2")
// };

// console.log(obj);
// const emp = Object.create(obj);
// console.log(emp);
 
function Person(){

}
Person.prototype.test1 = function(){
    console.log("Test1 ");
}
Person.prototype.test2 = ()=> console.log("Test2");
const person1 = new Person();
console.log(person1);

function Employee(name,age){
    this.name = name;
    this.age =  age;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = ()=> console.log("myTest");
const emp = new Employee("Mehmet",98); 
console.log(emp);
emp.myTest();






