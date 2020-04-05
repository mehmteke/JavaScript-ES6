// Es6+ öncesi
let number1,number2;

arr = [100,200,300,400]; 
number1 = arr[0];
number2 = arr[1];
console.log("Es6 öncesi" + number1,number2);

// Es6+ Destructing
[number1,number2] = arr;
console.log("Destructing " + number1,number2);

// Obje Destructing

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

//[number1,number2] = numbers; 
/* 
Kullanılırsa eğer, SCRIPT438: Object doesn't support property or method 'Symbol.iterator' hatasını alırsnız.
Çünkü obje atamaları farklı.
*/
const {a,b,f:d} = numbers;
//  Let/Const redeclaration
console.log("Destructing Obje " + a,b,d); // Sonuc: Destructing Obje 10 20 undefined
// Obje atamalarında isimler bire-bir aynı olmalı.


// Function larda Destructing Kullanımı:
getLangs = () => ["C#","C++","JavaScript"];
const [lang1,lang2,lang3] = getLangs();
console.log(lang1,lang2,lang3);

// Obje

const person = {
    name:"Mehmet",
    year:45,
    salary:50,
    showInfos: () => console.log("Bilgileri göster")
}

const {name:isim,year:yil,salary:maaş,showInfos:BilgileriGoster} = person;
console.log(isim,yil,maaş);
BilgileriGoster();