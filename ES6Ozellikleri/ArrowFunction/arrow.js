// ES6 öncesi function tanımı
const merhaba = function(){
    console.log("Merhaba");
}
merhaba();


// Arrow function

// const newMerhaba = () => {
//     console.log("Arrow Function");
// }

// newMerhaba();

const cupe = function(x){ return x*x*x;};
const newCupe = x => x*x*x;
console.log(cupe(4));
console.log(newCupe(5));