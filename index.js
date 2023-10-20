// Thought Process of PixelArtMaker
// Grab all elements needed
// Add eventlistener of click to the draw button
// When the drawBtn is clicked, grab the value of of the inputed rows and columns
// Using the values, create a table with the same number of rows and colums as requested
// Add eventListener to the colorPicked so that when it is clicked whatever color value it has will be grabed
// Give every td of the table a responsiveness so that when it is clicked its background color will be equal to the color value picked
// When the clear button is clicked, clear the table



let gridWidth = document.querySelector('#rows')
let gridHeight = document.querySelector('#columns')
let colorPicker = document.querySelector('#colorPicker')
let clearBtn = document.querySelector('#clear')
let drawBtn = document.querySelector('#draw')
let canvas = document.querySelector('#pixelCanvas')



// Create Grid
drawBtn.addEventListener('click', () => {
  // Initially Clear the old grids
  canvas.innerHTML = ""

  //count variable for generating unique ids
  let count = 0;
  //loop for creating rows
  for(i = 0; i < gridHeight.value; i++){
    // increase count by 2
    count += 2;
    // Create row tr
    let td = document.createElement("td")
    td.classList.add("gridRows");

    // Create Columns
    for(j = 0; j < gridWidth.value; j++){
        count += 2;
        // create column td
        let col = document.createElement("td");
        col.classList.add("gridColumns");
        /* We need unique ids for all columns (for touch screen specifically) */
        col.setAttribute("id", `gridColumns${count}`);

        col.addEventListener('mousedown', ()=>{
            draw = true;
            //if erase = true then background = transparent else colorpicked
            if (erase) {
            col.style.backgroundColor = "transparent";
            } else {
            col.style.backgroundColor = colorPicker.value;
            }
        });

        //Stop drawing
        col.addEventListener('mouseup', () => {
            draw = false;
        });
        //append columns
        td.appendChild(col);
    }
    // Append td to Canvas
    td.append(canvas)
  }

})

// Clear Grid
clearBtn.addEventListener('click', ()=>{
  canvas.innerHTML = ""
})
















