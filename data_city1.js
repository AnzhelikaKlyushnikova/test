const keyCities = 'STORAGE_KEY_CITIES'
const keyAddress = 'STORAGE_KEY_ADDRESS'
let json_city = [
    {
        "id": "defad517-2fc8-43a4-ae01-aa0ef0d2f264",
        "name": "Сочи",
        "address": "ул. Роз 117, офис 403"
    },
    {
        "id": "0af9c6f3-cc21-444c-94ec-2d86e654867d",
        "name": "Пятигорск",
        "address": "ул. Университетская 28"
    },
    {
        "id": "aa858457-43fd-4c42-82a6-8b6cee759fd9",
        "name": "Владикавказ",
        "address": "ул. Весенняя 15Г, офис 317"
    },
    {
        "id": "f197c4cb-0d12-49f7-b758-04cb11c6da07",
        "name": "Волгоград",
        "address": "ул. Академическая 22, офис 313"
    },
    {
        "id": "a483f910-8300-427e-aae8-7abc8e7b3b74",
        "name": "Ростов-на-Дону",
        "address": "пр-т М.Нагибина, 14а, офис 645"
    },
    {
        "id": "9cabdf58-ca4c-4276-b81a-8b9dbb9f33f3",
        "name": "Краснодар",
        "address": "ул. Красная 180, офис 112"
    }
]

localStorage.setItem(keyCities, JSON.stringify(json_city, ["name"]))
localStorage.setItem(keyAddress, JSON.stringify(json_city, ["address"]))

let updateCitiesArray = getCities()
let updateAddressArray = getAddress()

showCitiesUI()
showAddressUI()

function updateState() {
    updateCitiesStorage()
    showCitiesUI()
}

function updateStateAddress() {
    updateAddressStorage()
    showAddressUI()
}

//UI layer
function showCitiesUI() {
    let citiesListHTML = '';
    for (let i = 0; i < updateCitiesArray.length; i++) {
        citiesListHTML += `
            <li class="citiesListItems"
                <span>${updateCitiesArray[i]}</span>
            </li>`
    }
    document.querySelector('.cityItem').innerHTML = citiesListHTML;
}
function showAddressUI() {
    let addressListHTML = '';
    for (let i = 0; i < updateAddressArray.length; i++) {
        addressListHTML += `
            <li class="addressListItems"
                <span>${updateAddressArray[i]}</span>
            <button class="buttonDelete" onclick="deleteClickAction(${i})">
                    <img class="deleteImg" src="resources/Component 2.jpg" alt="del">               
            </button>
            </li>`
    }
    document.querySelector('.addressItem').innerHTML = addressListHTML;
}

//CLICK ACTIONS
document.querySelector('.buttonAddCity').onclick = function () {
        let cityName = document.querySelector('.name').value;
    updateCitiesArray.push(cityName)
    updateState()  

    let addressName = document.querySelector('.address').value;
    updateAddressArray.push(addressName)
    updateStateAddress()  
    }

function deleteClickAction(itemId) {
    for (let i = 0; i < updateAddressArray.length; i++) {
        if (i === itemId) {
            updateAddressArray.splice(i, 1)
            break
        }
    }
    updateStateAddress()
    for (let i = 0; i < updateCitiesArray.length; i++) {
        if (i === itemId) {
            updateCitiesArray.splice(i, 1)
            break
        }
    }
    updateState()

}


//Data layer
function getCities() {
    let citiesArray = []
    let storageCities = localStorage.getItem(keyCities)
    if (storageCities != null) {
        let rawJson = JSON.parse(storageCities)
        for (let i = 0; i < rawJson.length; i++) {
            citiesArray.push(rawJson[i].name)
        }
    }
    return citiesArray
}

function getAddress() {
    let addressArray = []
    let storageAddress = localStorage.getItem(keyAddress)
    if (storageAddress != null) {
        let rawJsonAddress = JSON.parse(storageAddress)
        for (let i = 0; i < rawJsonAddress.length; i++) {
          addressArray.push(rawJsonAddress[i].address)  
        }
    }
    return addressArray
}

function updateCitiesStorage() {
    localStorage.setItem(keyCities, JSON.stringify(updateCitiesArray));
}

function updateAddressStorage() {
    localStorage.setItem(keyAddress, JSON.stringify(updateAddressArray));
}

