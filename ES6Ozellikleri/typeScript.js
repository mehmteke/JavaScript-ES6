/*
  Kaynak : https://www.youtube.com/watch?v=LEKyAW3jPKA
  
  Microsoft tarfından geliştirlen JS Standartlarını değiştiren üst seviye yazım standartıdır.
  Typescript ile yazılan kodlar JS'e derlenir
  JS projelerine entegre edilebilir.
  Angular gibi Framewroklerde kullanılır.
  
     Typescript'in Özellikleri:
  1) Static Tipleme (Static Typing)
  2) Sınıf Tabanlı Objeler ve OOP özellikleri.
  3) Modülerlik
  4) ES6 standartlarını destekler.
        
     Typescript Derleyicisi(tsc)
  1) Typescript standartlarının browserda çalışması için yazılan kodları JS'ye çevirir.
  2) NPM Package olarak indirilir.(Node Gerekli)
   **** Node indirdikten sonra cmd de npm install -g typescript komutu çalıştırmak yeterli
  */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// START 1) Static Tipleme (Static Typing)
// let a : string;
// let b : number;
// let c : boolean;
// let d : any;
// console.log("TypeScript Dünyasına Hoş Geldiniz");
// a = "Mehmet";
// b = 245;
// c = true;
// d = false;
// console.log(a,b,c,d);
// let langs : string[];
// let numbers : number[];
// let boolValues: Array<boolean>;
// langs = ["Php","Java","C++","Pyhton"];
// numbers = [1,2,3,4];
// boolValues = [true,false,false];
// let a : Array<number> = [10,20,30,40];
// console.log(...langs);
// console.log(...numbers);
// console.log(...boolValues);
// console.log(...a);
/*
addNumbers fonksiyonun özellikleri:
num1 zorunlu
num2 zorunlu değil gönderilmezse default 100 verilir
num3 opsiyonel istese girer kullanıcı
fonksiyon number değer döner. : number{ ile sağladık.
*/
// function addNumbers(num1:number,num2:number = 100,num3?): number{
//     if(typeof num3 === "undefined"){
//         return num1 +  num2;
//     }else{
//         return num1 + num2 + num3;
//     }
// }
// console.log(addNumbers(10));
// END 1) Static Tipleme (Static Typing)
// START 2) Sınıf Tabanlı Objeler ve OOP özellikleri.
// KALITIM
// class Person {
//     name :string;
//     private age: number;
//     phone: string;
//      constructor(name:string,age:number,phone:string) {
//           this.name = name;
//           this.age = age;
//           this.phone = phone;
//           console.log("kişi oluşturuldu.");
//      }
//      showInfos(){
//          console.log(`İsim : ${this.name} Yaş : ${this.age} Phone : ${this.phone}`);
//      }
// }
// class Employee extends Person{
//      salary : number;
//      constructor(name:string,age:number,phone:string, salary:number) {
//          super(name,age,phone); 
//          this.salary = salary;
//      }
//      showInfos(){ 
//          super.showInfos();
//          console.log(this.salary);
//      }
//      changeDepartment(){
//          console.log("Department Değiştiriliyor...");
//      }     
// }
// let person1 = new Person("Mehmet",33,"5453265");
// //person1.showInfos();
// //console.log(person1.name);
// // console.log(person1.age); // Property 'age' is private and only accessible within class 'Person'.
// let employee  = new Employee("Fadime",28,"6545",546);
// employee.showInfos();
// INTERFACE
// interface IDatabase{
//     add();
//     get();
//     delete();
//     update();
// }
// class MySql implements IDatabase{
//     add(){
//         console.log("Mysql add");
//     }
//     get(){
//         console.log("Mysql get");
//     }
//     delete(){
//         console.log("Mysql delete");
//     }
//     update(){
//         console.log("Mysql update");
//     }
// }
// class MsSql implements IDatabase{
//     add(){
//         console.log("Mssql add");
//     }
//     get(){
//         console.log("MsSql get");
//     }
//     delete(){
//         console.log("MsSql delete");
//     }
//     update(){
//         console.log("MsSql update");
//     }
// }
// // let sql = new MySql();
// // sql.add();
// function addDatabase(database: IDatabase){
//    database.add();
// }
// addDatabase(new MySql);
// addDatabase(new MsSql);
// //  Interface olmasaydı aşağıdaki gibi 1 den fazla fonks tnımlamış olurdıuk
// function addDatabaseMysql(database:MySql){
//     database.add();
//  }
//  function addDatabaseMssql(database:MsSql){
//     database.add();
//  }
// ABSTRACT CLASS LAR
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.get = function () {
        console.log("Database Get");
    };
    Database.prototype.add = function () {
        console.log("Database Add");
    };
    return Database;
}());
var MySql = /** @class */ (function (_super) {
    __extends(MySql, _super);
    function MySql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySql.prototype["delete"] = function () {
        console.log("Delete");
    };
    MySql.prototype.update = function () {
        console.log("Update");
    };
    return MySql;
}(Database));
// END 2) Sınıf Tabanlı Objeler ve OOP özellikleri.
