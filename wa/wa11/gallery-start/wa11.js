const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["newimages/pic1.jpg",
"newimages/pic2.jpeg", 
"newimages/pic3.webp", 
"newimages/pic4.png",
"newimages/pic5.webp"]
/* Declaring the alternative text for each image file */
const altText = {
    "image1": "tennis ball",
    "image2": "basketball",
    "image3": "football",
    "image4": "baseball",
    "image5": "lacrosse ball"
}
/* Looping through images */

for (let i=0; i<images.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['image'+(i+1)]);
    thumbBar.appendChild(newImage);

    function displayImage() {
        displayedImage.setAttribute('src', images[i]);
        displayedImage.setAttribute('alt',altText['image'+(i+1)]);
    }
    newImage.addEventListener("click", displayImage);
}

/* Wiring up the Darken/Lighten button */
    btn.addEventListener("click",()=> {
        if (btn.getAttribute("class") == "dark"){
            btn.setAttribute("class", "light");
            btn.textContent = "lighten";
            overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        }

        else{
            btn.setAttribute("class", "dark");
            btn.textContent = "darken";
            overlay.style.backgroundColor = "rgba(0,0,0,0)";
        }
    })
