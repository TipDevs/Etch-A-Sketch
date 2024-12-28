// Global variable declarations and assignments
const canvas = document.querySelector('#canvas'),
inputValue = document.querySelector("#grid-number"),
eraserBtn = document.querySelector('#eraser-btn'),
resetBtn = document.querySelector('#reset-btn'),
randomColorBtn = document.querySelector('#random-color-btn'),
singleColorBtn = document.querySelector('#single-color-btn'),
leftSideContainer = document.querySelector('#left-side-container'),
gridLineBtn = document.querySelector('#grid-line-btn'),
submitContainer = document.querySelector('#submit-container'),
canvasSize = 400;
let canvasInitialDisplay = 'opacity: 10%; background-color: #272829; box-shadow: 5px 5px 40px #272829;'

// Add opacity and faded color to sketch container on window load.
canvas.setAttribute('style', canvasInitialDisplay);

// function to run which the square divs base on user input and when create button was clicked.
function activateCanvas(size) {
    canvas.setAttribute('style', '');
    canvas.innerHTML = ''; // Enables the sketch container to be empty initially
    const fragment = document.createDocumentFragment();
    for (i = 0; i < (size * size); i++) {
        const squareDivSize = canvasSize / size;
        let squareDivs = document.createElement('div');
        squareDivs.classList.add('square-divs');
        squareDivs.style.width = `${squareDivSize}px`
        squareDivs.style.height = `${squareDivSize}px`
        squareDivs.classList.add('grid-lines')
        fragment.appendChild(squareDivs);
    }
    canvas.appendChild(fragment);
}

// a function to run that get random color when the random color button was clicked.
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random()*16)];
    }
    return colors;
}

// function that add color to the canvas when one of the color buttons is click.
function addColorsToCanvas() {
    // button to activate single color option when mouse is hovering over the square divs
    singleColorBtn.addEventListener('click', () => {
        document.querySelectorAll('.square-divs').forEach(squareDivs => {
            squareDivs.addEventListener("mouseover", () => {
                squareDivs.style.backgroundColor = '#030387';
            })
        })
    });

    // button to activate random color option when mouse is hovering over the square divs
    randomColorBtn.addEventListener('click', () => {
        document.querySelectorAll('.square-divs').forEach(squareDivs => {
            squareDivs.addEventListener("mouseover", () => {
                squareDivs.style.backgroundColor = getRandomColor();
        });
        });
    });
}

addColorsToCanvas();

// function to restore the canvas to initial state when resetBtn is click.
function resetCanvas() {
    // button to restore the webpage to initial state.
    resetBtn.addEventListener('click', () => {
        canvas.innerHTML = '';
        canvas.setAttribute("style", canvasInitialDisplay);
        inputValue.value = '';
        inputValue.textContent = '';
    });
}
resetCanvas();

// function to erase the color from the canvas if the eraser button was clicked.
function eraseCanvas() {
    // button to erase the canvas by removing the square divs background color.
    eraserBtn.addEventListener('click', () => {
        document.querySelectorAll('.square-divs').forEach(squareDivs => {
            squareDivs.addEventListener('mouseover', () => {
                squareDivs.style.backgroundColor = '';
            });
        });
    });
}

eraseCanvas();

function showGridLines() {
    gridLineBtn.addEventListener('click', () => {
        document.querySelectorAll('.square-divs').forEach(squareDivs => {
            squareDivs.classList.toggle('grid-lines');
        })
    })
}

showGridLines();

/* function that activate the activateCanvas function and create square divs in the container
 base on the user input if user input is not less 16 and not greater than 100*/
 function canvasActivator() {
    let enterMessage = document.createElement('p');
    enterMessage.textContent = 'Click Enter';
    enterMessage.style.color = '#ffffff';
    inputValue.addEventListener('input', () => {
        submitContainer.appendChild(enterMessage);
    })

    inputValue.addEventListener('keydown', (e) => {
        const size = parseInt(inputValue.value);
        if (e.key === 'Enter'){
            if (size >= 16 && size < 101){
            submitContainer.removeChild(enterMessage);
            activateCanvas(size);
        }
        else {
            submitContainer.removeChild(enterMessage);
            alert("Please input a value from 16 to 100");
        }
    }
    });
    inputValue.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') inputValue.value = '';
    })
 }

 canvasActivator();

// function to run when the webpage is open and load on any devices smaller than laptop
function nonLaptopDisplay() {
    const tabletMediaQuery = window.matchMedia('(max-width: 768px)'),
        mobileMediaQuery = window.matchMedia('(max-width: 425px)');
    if(tabletMediaQuery.matches) {
        document.querySelector('body').innerHTML = '';
        let screenMessageContainer = document.createElement('div'),
        welcomeMessage = document.createElement('p'),
        screenMessage = document.createElement('p'),
        messageStyle = 'color: red; text-align: center; font-size: 2em;';
        welcomeMessage.textContent = 'Welcome to Etch A Sketch.'
        screenMessage.textContent = `Note: Canvas display can only work on Laptop or Desktop devices
         because Canvas display for devices smaller than Laptop are under construction`;
        welcomeMessage.setAttribute('style', messageStyle);
        screenMessage.setAttribute('style', messageStyle);
        screenMessageContainer.setAttribute('style', `max-width: 400px; max-height: fit-content;
             box-shadow: 5px 5px 20px #494744; padding: 10px;`)
        screenMessageContainer.appendChild(welcomeMessage);
        screenMessageContainer.appendChild(screenMessage);
        document.querySelector('body').appendChild(screenMessageContainer);
    }
    else if (mobileMediaQuery.matches) {
        document.querySelector('body').setAttribute('style', 'padding: 0 30px;');
    }
}

nonLaptopDisplay();