
let addCity = document.querySelector('.name');
let buttonAdd = document.querySelector('.add');
let todoCity = document.querySelector('.addCity');
let cityList = [];
var json_city = [
    {"id":"defad517-2fc8-43a4-ae01-aa0ef0d2f264",
    "name":"Сочи",
    "address":"ул. Роз 117, офис 403"},
    {"id":"0af9c6f3-cc21-444c-94ec-2d86e654867d",
    "name":"Пятигорск",
    "address":"ул. Университетская 28"},
    {"id":"aa858457-43fd-4c42-82a6-8b6cee759fd9",
    "name":"Владикавказ",
    "address":"ул. Весенняя 15Г, офис 317"},
    {"id":"f197c4cb-0d12-49f7-b758-04cb11c6da07",
    "name":"Волгоград",
    "address":"ул. Академическая 22, офис 313"},
    {"id":"a483f910-8300-427e-aae8-7abc8e7b3b74",
    "name":"Ростов-на-Дону",
    "address":"пр-т М.Нагибина, 14а, офис 645"},
    {"id":"9cabdf58-ca4c-4276-b81a-8b9dbb9f33f3",
    "name":"Краснодар",
    "address":"ул. Красная 180, офис 112"}]


if (localStorage.getItem('todo')){
    cityList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

buttonAdd.addEventListener('click', function(){

    let newCity = {
        todo: addCity.value
    };

    cityList.push(newCity);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(cityList));
});




    function displayMessages(){
    
        let displayMessage = '';
    cityList.forEach(function(item, i){
        displayMessage += `
    <li class="addLi"
        <span class="item" id= 'item_${i}'>
        <span class= 'item_${i}'>${item.todo}</span></span>
    </li>
    `;

    let btn = document.createElement('button');
    btn.className = 'delete'
        
        buttonDel.addEventListener('click', e => {
            console.log(btn)
        })

    })
}

 

/*
todoCity.addEventListener('contextmenu', function(event){
    cityList.forEach(function(item, i){
        if(item.todoCity === event.target.innerHTML) {
            cityList.splice(i, 1);
        displayMessages();
        localStorage.setItem('todo', JSON.stringify(cityList));
        }

    })
})
*/


/*


<button class='delete'><img class="deleteImg" src="resources/Component 2.jpg" alt="del"></button>


console.log()


    cityList.forEach(function(li){
        let delLi = document.querySelector('li.addLi')
        delLi.remove;


        if (input.value == "") {
        button.disabled = true;
        input.style.border = "1px solid red";
    } else {
        button.disabled = false;
        input.style.border = "1px solid #D0D3DA;"
    }  
   
*/