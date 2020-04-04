
/*
 Function Scope,
 Global Scope,
 Block Scope
*/

//  Global Scope

var sayi = function(){
    // Function Scope
}

var a = 4;
if(a > 0){
    //  Block Scope   (if,while,for..)
}


//  ÖRNEK 1 
var value1 = 10;
let value2 = 20;
const value3 = 30;

//console.log(value1, value2,value3); // 10,20,30

work = function(){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    //console.log(value1, value2,value3);
}

//work(); // 40,50,60
// Fonksiyon bittikten sonra burda tanımlanan değişkenler silinir.
// Bundan dolayı aşağıdaki değerler global olanlar gelir.
// Function Scope lar kullanırdıktan sonra içindeki dğerler silinir ama Block Scope lar böyle değil
//console.log(value1, value2,value3); // 10,20,30

//  ÖRNEK 2 

// var a = 10;
// let b = 20;
// const c = 30;

//console.log(a, b,c);  

if(true){
    var a = 40;
    let b = 50;
    const c = 60;
    // console.log(a, b,c); 
}
 
// console.log(a, b,c);  // 10, b ve c not defined.
// 'b' is not defined, 'c' is not defined
/*
  Burda var ile {let,const} arasındaki önemli farklardan biri karşımıza çıkıyor.
  if block da tanımlanan a globalde de tanımlı fakat b ve c if Block unda kullnıldıktan sonra Globalde tanımsız. 
*/

// ****** Şimdi Gelin Bir Diğer Öenmli Farka bakalım.

console.log(value1, value2,value3); // 10,20,30


if(true){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1, value2,value3); // 40, 50, 60 
}

console.log(value1, value2,value3); // 40, 20, 30 

