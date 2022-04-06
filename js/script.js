// Question 1

const cat = {
        complain: function() {
                console.log("Meow!");
        }
}

cat.complain();



// Question 2

let heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";



// Question 3

heading.style.fontSize = "2em";



// Question 4

heading.classList.add("subheading");



// Question 5

let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {

        paragraphs[i].style.color = "red";
}



// Question 6:

let resultContainer = document.querySelector(".results");

resultContainer.innerHTML = "<p>New paragraph</p>";
resultContainer.style.backgroundColor = "yellow";



// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function nameList(list) {
    

        for (let i = 0; i < list.length; i++) {

                console.log(list[i].name);
        }
}

nameList(cats)


/* Question 8:

Create a function called createCats. The function will have one parameter called cats.

Inside the function loop through the value passed in as cats and create HTML for each object in the array.

Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.

If the age property is missing, it should display “Age unknown” instead.

Return the HTML from the function.

Call the function and pass in the cats array as the argument.

Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container. */

function createCats(cats) {

        const catProfiles = document.querySelector(".cat-container");

        for (let i = 0; i < cats.length; i++) {

                let catContainer = document.createElement("div");

                let nameObject = document.createElement("h5");

                nameObject.innerHTML = cats[i].name;

                let ageObject = document.createElement("p");

                ageObject.innerHTML = cats[i].age;

                catContainer.appendChild(document.createTextNode(nameObject + ageObject));

                if(cats[i].age !== Number && !cats[i].age) {
                    
                        ageObject.innerHTML = "Age unknown";

                } else {

                        ageObject.innerHTML = cats[i].age;

                }
        
        catProfiles.appendChild(catContainer);
        }
}

createCats(cats)