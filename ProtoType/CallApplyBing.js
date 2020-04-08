// call,apply,bind: Bir objeyi fonksiyona bağlamak için kullanılır.
// Başka bir ctor u çağırmak içinde kullanılır.
const obj1 = {
    number1: 10,
    number2: 20
};

const obj2 = {
    number1: 30,
    number2: 40
};

function addNumbers(number3,number4){
    console.log(this);
    return this.number1 + this.number2 + number3 + number4;
}

// console.log(addNumbers(100,200));
console.log(addNumbers.call(obj1,100,200));
console.log(addNumbers.apply(obj2,[100,200]));

// Bind Kavramı:
/*
 Bind ı Call ve Apply de ayıran özelliği fonksiyonlardan bir kopya alır ve onun üzerinde gider.
*/

function getNumbersTotal(number3,number4){
  return this.number1 + this.number2 + number3 + number4;
}

const copfunction1 = getNumbersTotal.bind(obj1);
const copfunction2 = getNumbersTotal.bind(obj2);

console.log(copfunction1(500,500));
console.log(copfunction2(500,500));