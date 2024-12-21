// Global variable declarations and assignments
const sketchContainer = document.querySelector('#right-side-square-container'),
inputValue = document.querySelector("#grid-number"),
createBtn = document.querySelector('#create-btn'),
resetBtn = document.querySelector('#reset-btn'),
randomColorBtn = document.querySelector('#random-color-btn'),
singleColorBtn = document.querySelector('#single-color-btn'),
leftSideContainer = document.querySelector('#left-side-container'),
sketchContainerSize = 400;

// Add opacity and faded color to sketch container on window load.
sketchContainer.setAttribute("style", 'opacity: 10%; background-color: #272829; box-shadow: 5px 5px 40px #272829;');