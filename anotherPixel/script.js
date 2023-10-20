// Thought Process
// Grab all the elements needed
// Add eventListener to the 'draw' button
// In the event of click, grab the user inputs of the colWidth and rowHeight
// Create a table
// Use the value inputs of colWidth to create the lenghts as much 'tds' in a 'tr'
// Use the value inputs of rowHeight to create the 'tr' as many times
// Add for each loop to the colorPicked
// Add eventListener to the colorPicked
// Grab the value of the colorPicked
// Give colorPicked a boolean value
// Add a for each loop to eraseButton
// Add eventListener to the erase button
// In this event, if the colorPicked bolean is true, then clear the colorPicked value
// For the paintButton, if the colorPicked boolean is true, then change the 
//  -background color of the 'td' picked to be equal to the colorPicked value
// For the clearButton, add an eventListener to clear/remove the table and its content

//Initial references
let container = document.querySelector(".container");
let draw = document.getElementById("submit");
let clear = document.getElementById("clear");
let rowHeight = document.getElementById("height-column");
let colWidth = document.getElementById("width-row");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");

// Add eventListener to draw
draw.addEventListener('click', (e)=>{
    // store the values of the column and row inputs
    rows = rowHeight.value;
    columns = colWidth.value;
    let count = 0;
    // create a table
    let table = document.createElement('table');
    // create as many 'trs' and 'tds' as the values of rowHeight and colWidth
    // Loop for creating rows
    for (let i = 0; i = rowHeight.value; i++){
        //incrementing count by 2
        count += 2;
        //Create row div
        let tr = document.createElement("tr");
        tr.classList.add("tableRow");
        //Create Columns
        for (let j = 0; j < colWidth.value; j++) {
            count += 2;
            let column = document.createElement("td");
            col.classList.add("tableColumn");
            /* We need unique ids for all columns */
            column.setAttribute("id", `tableColumn${count}`);
        }
    }
})