/*
Session Storage’ da saklanan veri mevcut tarayici oturumu süresince, sekme ya da pencere kapatilana kadar var olur, 
bunlar kapatildiginda veri de yok edilir. 
Açikçasi depolanan verinin aksi olana dek mevcut olmasi isteniyorsa Local Storage, Session Storage’ a göre daha 
tercih edilesidir çünkü Local Storage datasinin yok olma zamani yoktur. 
Client kullanicisi temizlemezse ya da uygulama yapimcisi herhangi bir bitis zamani belirtmezse Local Storage’ da
 saklanan veri günler, aylar hatta yillarca silinmez.
Ancak Local Storage ve Session Storage kullanici tarayicisi üzerinden kolayca okunabilir ve degistirilebilir,
 bu sebeple uygulamalar içerisindeki güvenlikle ilgili verilerin depolanmasi konusunda asla güvenilmemelidir.
 https://medium.com/@toprakerzurumluoglu/localstorage-vs-sessionstorage-de5d1d399da8
*/

//  Session Storage - Key ve Value

// console.log(window);
// Butonları seçelim
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// İnputları seçelim

const addKey = document.querySelector("#addKey");
const addValue = document.querySelector("#addValue");
const deleteKey = document.querySelector("#deleteKey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){ 
  sessionStorage.setItem(addKey.value,addValue.value);
}
function deleteItem(e){
  sessionStorage.removeItem(deleteKey.value);
}
function clearItems(e){
  sessionStorage.clear();
}


// -*-*-*-*-*- Local Storage
// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);
//  Değerler string olarak alınır.
// const value = localStorage.getItem("tekrar");
// console.log(value); // 50
// console.log(typeof value); // string

// *-*-*-*- Local Storage - Array Yazma

// const todos = ["todo 1","todo 2","todo 3"];
// localStorage.setItem("todos",JSON.stringify(todos));

// console.log(JSON.parse(localStorage.getItem("todos")));


