const name = "Mehmet";
const department = "Developer";
const salary = 4500;

// ES6 öncesi kullanım
const a = "İsim :" + name + "\n" + " Bölüm :" + department + "\n" + " Maaş : " + salary;
//console.log(a);

/*
 BackTicks kullanara Ctrl+alt + ; veya alt-gr + 2*;
*/
//  Yeni Kullanım
const b = `İsim : ${name} \n Bölüm : ${department} \n Maaş:${salary}`;
//console.log(b);

const html = "<ul> " +
             "<li> " + name + "</li>" +
             "<li> " + department + "</li>" +
             "<li> " + salary + "</li>" +
             "</ul>";
             // document.body.innerHTML = html;
             
const newHtml = `
         <ul>
             <li> ${name} </li>
             <li> ${department}</li>
             <li> ${salary}</li>
         </ul> 
`; 
 
document.body.innerHTML = newHtml;





