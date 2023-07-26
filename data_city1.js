
let addCity = document.querySelector('.name');
let buttonAdd = document.querySelector('.add');
let todoCity = document.querySelector('.addCity');
let cityList = [];


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
        <span class= 'item_${i}'>${item.todo}</span></span><button class='delete'><img class="deleteImg" src="resources/Component 2.jpg" alt="del"></button>
    </li>
    `;
    todoCity.innerHTML = displayMessage;
    
   
});
};

let buttonDel = document.querySelector('.delete');
todoCity.addEventListener('contextmenu', function(event){
    cityList.forEach(function(item, i){
        if(item.todoCity === event.target.innerHTML) {
        if(buttonDel.addEventListener('click', function(){}))
            cityList.splice(i, 1);
        displayMessages();
        localStorage.setItem('todo', JSON.stringify(cityList));
        }

    })
})



/*
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