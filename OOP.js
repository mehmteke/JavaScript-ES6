let value;

const programmer = {
     name : "Mehmet",
     email:"teker.mehmed@gmail.com",
     age:33,
     adreess  : {
      city: "Van",
      street:"Tuşba"
     },
     work: function(){
         console.log("Programcı Çalışıyor");
     }
};

value = programmer.adreess.city;


const programmers = [
    {name : "Mehmet", age:25},
    {name : "Ahmet", age:64}
]

value = programmers[0];
console.log(value);

