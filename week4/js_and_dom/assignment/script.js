/*
 * Joshua Reed
 * OSU EECS
 * CS 290 -> Web Design
 * Summer, 2017
 *
 * script.js
 *
 * Description: Populates an html frame with objects required for 
 * a weekly assignment.
 */



// Main function to be called onload of document body.
function main(){
    tableCreate(4,4);
    makeButtons();
}


// Much of this function inspired by:
// https://stackoverflow.com/questions/14643617/create-table-using-javascript
//
// This function creates a table within the body of an HTML document.
// The table will consist of rowCnt by colCnt cells.
// The border will be 2 pixels.
function tableCreate(rowCnt, colCnt){

        // Create <table> and a <tbody>
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");

        // Append the <tbody> to the <table>.
        tbl.style.padding = "10px";
        tbl.style.borderSpacing= "10px";
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);


        // Create and append table rows to the table body.
        for (var j=0; j<rowCnt; j++){
            var row = document.createElement("tr");
            tblBody.appendChild(row);
            
            // Create <td> element and text node. 
            // Append <td> to <tr> and text node to <td>.
            for (var i=0; i<colCnt; i++){
                var cell = document.createElement("td");    
                var cellText = document.createTextNode(j + " " + i); 
                cell.appendChild(cellText);
                cell.style.border = "solid white thick";
                row.appendChild(cell);
                }
            }

    }

function cellAt(coord){
    
    var tBody = document.getElementsByTagName("tbody")[0];
    var cell = tBody.rows[coord[0]].cells[coord[1]];
        
    return cell;
    }




// This is a function generater. The function that is returned allows
// the buttons to modify the current coordinates of the highlighted box.
//
// arr: the button's offset array in the form of [x,y]
// currentCoord: the coordinates to be modified. This is passed here 
// so that only one variable is shared between the buttons.
function modifyCoords(arr, currentCoord){

    // Helper function to impose limits on the coordinates.
    function limitCoord(upper, lower, coord){
        coord = Math.min(upper, coord);
        coord = Math.max(lower, coord);
        return coord;
        }

    // Prototyped function for each button.
    return function modCoords(){
        var temp = cellAt(currentCoord).style.border = "solid white thick";
        currentCoord[0] = limitCoord(3, 0, currentCoord[0]+arr[0]);
        currentCoord[1] = limitCoord(3, 0, currentCoord[1]+arr[1]);
        cellAt(currentCoord).style.border = "solid black thick";
        var cText = document.getElementById("cText");
        cText.innerHTML = currentCoord;
        };
    }


// This function makes buttons that modify and track a coordinate.
// This coordinate is then used later to move which table element is highlighted.
function makeButtons(){
    var currentCoord = [0, 0];
    var lst = {'up':[-1,0], 'down':[1,0], 'left':[0,-1], 'right':[0,1]};
    for (var key in lst){
        var btn = document.createElement("button");
        var bText = document.createTextNode(key);
        btn.appendChild(bText);
        btn.onclick = modifyCoords(lst[key], currentCoord);
        document.body.appendChild(btn);
        }
    cellAt(currentCoord).style.border = "solid black thick";  // Initialize cell border location.
    var div = document.createElement("div");
    div.id = "cText";
    div.innerHTML = currentCoord;
    document.body.appendChild(div);
    }

