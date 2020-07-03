// objecy literal for the pet salon information
const salon = {
    name: "The fashion pet",
    phone:"6445897533",
    address:{
        street:"Av. University",
        number:"219-K"
    },
    counter:function(){
        alert("A pet was registered");
    },
    pets:[]
}

let {name,phone,address:{street,number}} = salon;

document.getElementById("footer-info").innerHTML=`
    <p class="text-center"> ${name}, ${phone}, ${street}, ${number}
    </p> `;
    


//object constructor for the pets
var c=0;
class Pet{
    constructor(name,age,breed,gender,service,service2,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.service2=service2;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id="pet"+c;
        c+=1;
    }
    ownerInfo=function(){
        console.log(`${this.ownerName} ${this.contactPhone}`);
    }
}

//get the information from the HTML Form
let txtName = document.getElementById("petName");
let txtAge = document.getElementById("petAge");
let txtBreed = document.getElementById("petBreed");
let txtGender =document.getElementById("petGender");
let txtService = document.getElementById("petService");
let txtservice2 = document.getElementById("petService2");
let txtOwner = document.getElementById("petOwner");
let txtContactPhone = document.getElementById("contactPhone");


// create two objects
const scooby = new Pet('Scooby',60,"Dane","Male", "Full Service","Mani Pedi","Shaggy","568978899");
console.log(scooby.ownerInfo());
salon.pets.push(scooby);
displayTable(scooby);

const tom = new Pet("Tom",40,"Mao","Male","Half Service","none","Grandma Maggie","5689009432");
salon.pets.push(tom);
console.log(tom.ownerInfo());
displayTable(tom);

// get the information from the HTML form

// register function
function register(){
    let thePet = new Pet(txtName.value,txtAge.value, txtBreed.value, txtGender.value, txtService.value, txtservice2.value, txtOwner.value, txtContactPhone.value);
    console.log("The pet was registered");
    console.log(thePet);
    salon.pets.push(thePet);
    displayTable(thePet);
    clearInputs();
}

function clearInputs(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtService2.value="";
    txtOwner.value="";
    txtContactPhone.value="";
}

// display function
function display(aPet){
    let listBody=document.getElementById('petList');
    
    let item=`<li> ${aPet.name} ${aPet.age} ${aPet.breed} ${aPet.gender} ${aPet.service} ${aPet.service2} `;
    
    listBody.innerHTML+=item;
    //salon.counter();
    
}


function displayTable(aPet){
    var tableBody = document.getElementById("rowPet");
    
    var buttons = document.getElementsByClassName("button");
        for (var b = 0; b < buttons.length; b++) {
        buttons[b].classList.add("okay");
    }
    var row = `
        <tr id="${aPet.id}">
            <td> ${aPet.name}</td>
            <td> ${aPet.age}</td>
            <td> ${aPet.gender}</td>
            <td> ${aPet.breed} </td>
            <td> ${aPet.service} </td>
            <td> ${aPet.service2} </td>
            <td> ${aPet.ownerName} </td>
            <td> ${aPet.contactPhone} </td>
            <td> <button class="button" id="ok" onclick='deletePet("${aPet.id}")'> </button> </td>
        </tr> `;
    
    tableBody.innerHTML+=row;
    
}

function deletePet(petId){
    var tr=document.getElementById(petId);
    var indexDelete;
    for(var i=0;i<salon.pets.length;i++){
        var selectedPet=salon.pets[i];
        if(selectedPet.id==petId){
            indexDelete=i;
            console.log(selectedPet.id);
        }
    }
    console.log(salon.pets[indexDelete]);
    salon.pets.splice(indexDelete,1);
    
    console.log(tr)
    tr.remove();
    console.log(salon.pets);
}

function searchPet(){
    console.log("search function executed");
    var ss = document.getElementById('petSearch');
    var searchString = ss.toLowerCase();
    
    for(var i=0; i<salon.pets.length; i++){
        var theFoundPet = salon.pets[i];
        
        if(theFoundPet.name.toLowerCase() == searchString){
            var index=i;
        }
    }
    
    console.log(searchString);
    document.getElementById('petSearch').value
    
}
