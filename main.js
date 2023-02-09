let myImages = Array.from(document.querySelectorAll(".container .images img"));
let imagesCounter = document.querySelector(".container .image-counter");
let BulletsContainer = document.querySelector(".container .bullets")

//Get Images Length
let imgsLength = myImages.length;

// set current slide

let cuurentSlide = 0;




// Get Prev and Next Butens

let nextButten = document.querySelector(".container .buttens .next");
let prevButten = document.querySelector(".container .buttens .prev");

nextButten.onclick = nextSlide;
prevButten.onclick = prevSlide;



// Create The Main Ul

let mainUl = document.createElement("ul");

mainUl.setAttribute("id","main-ul");

for (let i =0 ;i < imgsLength;i++) {
    let li = document.createElement("li");
    li.setAttribute("data-index" , i + 1);
    mainUl.appendChild(li);
}

BulletsContainer.appendChild(mainUl);
let lis =Array.from(document.querySelectorAll(".container .buttens .bullets ul li"));


theChecker()
// Create Checker Function
function theChecker() {
    //Set Number of Current Images
    imagesCounter.innerHTML=`Slide #${cuurentSlide + 1} of ${imgsLength}`;
    removeActiveClass();
    // Show the cuurent Image
    myImages[cuurentSlide].classList.add("active");
    
    //Show The Current li
    lis[cuurentSlide].classList.add("active");

    if (cuurentSlide == 0) {
        prevButten.classList.add("disabled");
    }else {
        prevButten.classList.remove("disabled");
    }
    
    if (cuurentSlide == imgsLength - 1) {
        nextButten.classList.add("disabled");
    }else {
        nextButten.classList.remove("disabled");
    }

}


function nextSlide() {
    if (cuurentSlide == imgsLength - 1) {
        return false
    }
    cuurentSlide++;
    theChecker()
}
function prevSlide() {
    if (cuurentSlide == 0) {
        return false
    }
    cuurentSlide--;
    theChecker()
}


function removeActiveClass() {
    myImages.forEach(img => {
        img.classList.remove("active");
    });
    lis.forEach(li => {
        li.classList.remove("active");
    });
}