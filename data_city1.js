
let input = document.getElementById("data_city");
let button = document.querySelector('button.add');

let div = document.getElementById("Kras");
let divAddress = document.getElementById("Kras1");
let div1 = document.getElementById("Pyat");
let divAddress1 = document.getElementById("Pyat1");
let div2 = document.getElementById("Volg");
let divAddress2 = document.getElementById("Volg1");
let div3 = document.getElementById("Sochi");
let divAddress3 = document.getElementById("Sochi1");
let div4 = document.getElementById("Vlad");
let divAddress4 = document.getElementById("Vlad1");

let divDelete = document.getElementById("Kras2");
let divDelete1 = document.getElementById("Pyat2");
let divDelete2 = document.getElementById("Volg2");
let divDelete3 = document.getElementById("Sochi2");
let divDelete4 = document.getElementById("Vlad2");




button.onclick = function () {
       if (input.value === 'Краснодар') {
       div.style.display = "inline-block";
       divAddress.style.display = "inline-block";
       divDelete.style.display = "inline-block";
       input.value = '';
    }
        if (input.value === 'Пятигорск') {
        div1.style.display = "inline-block";
        divAddress1.style.display = "inline-block";
        divDelete1.style.display = "inline-block";
        input.value = '';
    }
        if (input.value === 'Волгоград') {
        div2.style.display = "inline-block";
        divAddress2.style.display = "inline-block";
        divDelete2.style.display = "inline-block";
        input.value = '';
    }
        if (input.value === 'Сочи') {
        div3.style.display = "inline-block";
        divAddress3.style.display = "inline-block";
        divDelete3.style.display = "inline-block";
        input.value = '';
    }
        if (input.value === 'Владикавказ') {
        div4.style.display = "inline-block";
        divAddress4.style.display = "inline-block";
        divDelete4.style.display = "inline-block";
        input.value = '';

    }

 };  
   /* 
        if (input.value == "") {
        button.disabled = true;
        input.style.border = "1px solid red";
    } else {
        button.disabled = false;
        input.style.border = "1px solid #D0D3DA;"
    }  
   
*/