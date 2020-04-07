// console.log(window); this ile aynı obje

// const emp1 = { // Object Literal
//     name:"Mehmet",
//     age:25,
//     showInfos:function(){
//         console.log("Bilgiler Gösteriliyor.");
//     }
// };

// const emp2 = {
//     name:"Ahmet",
//     age:65,
//     showInfos: ()=> console.log("Arrow Function Bilgileri Göster") // Arrow Function ES6
// };
 
// emp1.salary = 500;
// emp1.showInfos();
// console.log(emp1);

// Yukarda Obje Tanımı ES6 öcesi.

// // Yapıcı Fonksiyon - Constructor ile Object oluşturmak.
// function Employee(name,age,salary) { 
//    this.departmen = "Bilgi İşlem"; // Tüm nesnelerde aynı olacaksa burda tanımlanabilir.
//    this.name = name;
//    this.age = age;
//    this.salary = salary; 
//    this.showInfos = ()=> console.log(this.name,this.age,this.salary);
//    console.log(this); // Employee objesini verir.
// }

// const emp1 = new Employee("Mehmet",65,500);
// emp1.showInfos();
// //console.log(emp1); 


// Burda özellikle _proto_ nesnesinin kavramını anlamaya çalışacağız.
const object = new Object();
//console.log(object);
// [object Object]: {}  Console bakarsak aşağıdaki gibi bir obje olduğunu
// görürüz. Bunun içinde birden fazla metot var örneğin hep kullandığımız toString() metotu proto nesnesinin bir metotudur.
// __proto__: Object 


// function Employee(name,age){
//     this.name = name;
//     this.age = age;
//     this.showInfos = ()=> console.log(`İsim : ${this.name} Yaş : ${this.age}`);
// };

//  const emp1 = new Employee("Mehmet",45);
//  console.log(emp1.toString); // toString metotu proto objesinin bir metotu aslında.

// //  ProtoType in EN önemli Özelliği.
//  function Employee(name,age){
//     this.name = name;
//     this.age = age;
//     //this.showInfos = ()=> console.log(`İsim : ${this.name} Yaş : ${this.age}`);
//     // Bu fonksiyonu aşağıdaki gibi ortak obje ye aldık.
// };
// Employee.prototype.showInfos = ()=> console.log(`İsim : ${this.name} Yaş : ${this.age}`);
//  const emp1 = new Employee("Mehmet",45);
//  const emp2 = new Employee("Ahmet", 24);
//  console.log(emp1);
//  console.log(emp2);
// // Dikkat edersenin burda kaç tane obje oluştursak hepsinin ortak olan bir metot var showInfos
// // ProtoType in bir diğer özelliğide ortak metotları veya field leri o objenin prototype ina tanımlayabiliriz
// // Böylece her defasında bunlar oluşturumamış olur.


































