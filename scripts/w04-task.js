/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Issah Akuffo",
    photo : "images/issah_pic.jpeg",
    favoriteFoods : [
        "JolloRice",
        "Waakye",
        "Fufu",
        "Burger",
        "Banku",
        "SeaFood"
    ],
    hobbies : [
        "Reading",
        "Movies",
        "VideoGame",
        "ContentCreating",
        "Football"
    ], 
    placesLived : []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place : "Darkuman-Accra",
        length : "17 years"
    },
    {
        place : "Ablekuman-Accra",
        length : "3 years"
    },
    {
        place : "Tseaddo-Accra",
        length : "11 years"
    }
);


/* DOM Manipulation - Output */

/* Name */

document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */

let photoElement = document.getElementById("photo");

photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place =>{
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

   // append elements dt and dd to  element in HTML (ul) with id places-lived       
document.querySelector("#places-lived").appendChild(dt);
document.querySelector("#places-lived").appendChild(dd);

});
