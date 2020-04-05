const langs = ["C#","JavaScript","C++"]
console.log(langs);

// Eski gösterim
console.log(langs[0],langs[1],langs[2]);
// Es6 Özelliği
console.log(...langs);

const langs2 = ["Pyhton","React",langs[0]];
console.log(...langs2);

// Function da kullanımı
const numbers = [100,200,300];
const showInfos = (a,b,c,tanım)=>console.log(a+b+c,tanım);
// Eski Kullanım
showInfos(numbers[0],numbers[1],numbers[2],"ES6 Öncesi Kullanım");
// Es6 Spread
showInfos(...numbers,"Spread Es6 sonrası Kullanım");