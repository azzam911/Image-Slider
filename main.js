// Ger Slider Images
let myimages = Array.from(document.querySelectorAll(".container .images-slider img"));

// Get Bullets slider
let bulletsContainer = document.querySelector(".container .bullets");
// Set Cuurent Slide
let currentSlide = 0;

// Get Number Of Slides
let imageCount = myimages.length;

// Slide Number Element 
let counter = document.querySelector(".container .counter-images");

// Previous and Next Buttens
let nextButtten = document.querySelector(".container .buttons .next");
let prevButtten = document.querySelector(".container .buttons .prev");

// Handle click on previous and next buttens
nextButtten.onclick = nextSlide;
prevButtten.onclick = prevSlide;



// create Main Ul Element

let mainUl = document.createElement("ul");
mainUl.setAttribute("id","pagination-ul");
for (let i = 1; i <= imageCount;i++) {

    let li = document.createElement("li");

    li.setAttribute("data-index",i);

    mainUl.appendChild(li);
}
bulletsContainer.appendChild(mainUl);


// Get The Created Ul 
let createdUl = document.getElementById("pagination-ul");

// Get All Bullets From Main Ul
let setacBullte = Array.from(document.querySelectorAll(".container .bullets ul li"));

function nextSlide() {
    if (currentSlide == imageCount -1) {
        return false
    }
    currentSlide++;
    thechecker();
}
function prevSlide() {
    if (currentSlide == 0) {
        return false
    }
    currentSlide--;
    thechecker();
}



thechecker()

// Create the Checker Function
function thechecker() {
    removeActive();
// Set The Slide Number
    counter.innerHTML= `slide #${currentSlide + 1} of ${imageCount}`;

    // Set active class on current slide
    myimages[currentSlide].classList.add("active");

    //Set active class on bullets
    setacBullte[currentSlide].className="active";

    if (currentSlide == 0 ) {
        prevButtten.classList.add("disapled");
    }else {
        prevButtten.classList.remove("disapled");
    }
    if (currentSlide == 4) {
        nextButtten.classList.add("disapled");
    }else {
        nextButtten.classList.remove("disapled");
    }
    
    
}


function removeActive() {
    myimages.forEach(img => {
        img.classList.remove("active");
    });

    setacBullte.forEach(bullet => {
        bullet.classList.remove("active");
    })
    

}