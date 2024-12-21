// Global variable declarations and assignments
const canvas = document.querySelector('#canvas'),
inputValue = document.querySelector("#grid-number"),
createBtn = document.querySelector('#create-btn'),
resetBtn = document.querySelector('#reset-btn'),
randomColorBtn = document.querySelector('#random-color-btn'),
singleColorBtn = document.querySelector('#single-color-btn'),
leftSideContainer = document.querySelector('#left-side-container'),
canvasSize = 400;

// Add opacity and faded color to sketch container on window load.
canvas.setAttribute("style", 'opacity: 10%; background-color: #272829; box-shadow: 5px 5px 40px #272829;');

// function to run which the square divs base on user input and when create button was clicked.
function activateCanvas(size) {
    canvas.setAttribute('style', 'display: flex;');
    canvas.innerHTML = ''; // Enables the sketch container to be empty initially
    for (i = 0; i < (size * size); i++) {
        const squareDivSize = canvasSize / size;
        let squareDivs = document.createElement('div');
        squareDivs.classList.add('square-divs');
        squareDivs.style.width = `${squareDivSize}px`
        squareDivs.style.height = `${squareDivSize}px`
        canvas.appendChild(squareDivs);

        // button to activate single color option when mouse is hovering over the square divs
        singleColorBtn.addEventListener('click', () => {
            squareDivs.addEventListener("mouseover", () => {
                squareDivs.style.backgroundColor = '#030387';
            })
        });
    }
}

/* button that trigger the create square 
divs function and create square divs in the container
 base on the user input if user input is not less 16 and not greater than 100*/
 createBtn.addEventListener('click', () => {
    const size = inputValue.value;
    if (size >= 16 && size < 101){
        activateCanvas(size);
    }
    else {
        alert("Please input a value from 16 to 100");
    }
});