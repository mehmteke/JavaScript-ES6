function Person(name,age){
    this.name = name,
    this.age = age
};
Person.prototype.showInfos = function() {
     console.log(`İsim : ${this.name} Yaş : ${this.age}`);
    }

const person1 = new Person("MEhmet",21);
person1.showInfos();

function Employee(name,age,salary){
     console.log(this); 
     Person.call(this,name,age);
     this.salary = salary
}

Employee.prototype = Object.create(Person.prototype);

// override ettik bu metotu
Employee.prototype.showInfos = function (){
     console.log(`İsim: ${this.name} Yaş : ${this.age} Maaş:${this.salary}`);
    }

const emp = new Employee("Ahmet",45,250);
emp.showInfos(); 
