const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const imgTag = document.querySelector('img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filename = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg']
const newImageList = [];
/* Declaring the alternative text for each image file */
const description = [
    "Closeup of a human eye",
    "clod waves",
     "Closeup of flowers",
     "Ancient Art history",
     "Bufferfly on leaf"
];

/* Looping through images */
for(var i = 0; i < filename.length; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filename[i]);
    newImage.setAttribute('alt', description[i]);
    //newImageList.push(newImage);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {

        
    displayedImage.setAttribute('src', newImage.getAttribute('src'));
    displayedImage.setAttribute('alt', newImage.getAttribute('alt'));

    console.log(newImage);

})
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    var attribute = btn.getAttribute('class'); 
    if(attribute == "dark")
    {
        btn.setAttribute('class', "light")
        btn.textContent = "Lighten"; 
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else{
        btn.setAttribute('class', "dark")
        btn. textContent = "Darken"; 
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})


