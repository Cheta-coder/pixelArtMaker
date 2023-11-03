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
let drawBtn = document.getElementById("submit");
let clear = document.getElementById("clear");
let rowHeight = document.getElementById("height-column");
let colWidth = document.getElementById("width-row");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");

draw = false
erase = false

let create = ()=> {
    let rows = Number(rowHeight.value);
    let columns = Number(colWidth.value);
    let table = document.createElement('table');
    console.log(typeof(columns));

    for(i = 0; i < rows; i++){
        let trow = document.createElement('tr');
        console.log(trow);
        for(j = 0; j < columns; j++){
            let tdata = document.createElement('td');
            tdata.setAttribute("class", 'tdata');

            // tdata.addEventListener('mousedown', ()=>{
            //     // User starts drawing
            //     draw = true;
            //     // If erase = true, then the background image = transparent else = color value
            //     if(erase){
            //         tdata.style.backgroundColor = 'transparent';
            //     }else{
            //         tdata.style.backgroundColor = colorButton.value;
            //     }
            // });

            // // User stops drawing
            // tdata.addEventListener('mouseup', ()=>{
            //     draw = false
            // })
            trow.appendChild(tdata);
            table.appendChild(trow);
        }
        container.innerHTML = ''
        container.appendChild(table);
    }
}

drawBtn.addEventListener('click', create)

// //Clear Grid
// clear.addEventListener("click", () => {
//     container.innerHTML = "";
// });

// //Erase Button
//   eraseBtn.addEventListener("click", () => {
//   erase = true;
// });
  
// //Paint button
//   paintBtn.addEventListener("click", () => {
//   erase = false;
// });

