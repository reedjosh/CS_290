
// Main function to be called onload of document body.
function main(){
    document.getElementById("demo").innerHTML = "Good Job!";
    tableCreate(4,4);
}


// Much of this function inspired by:
// https://stackoverflow.com/questions/14643617/create-table-using-javascript
//
// This function creates a table within the body of an HTML document.
// The table will consist of rowCnt by colCnt cells.
// The border will be 2 pixels.
function tableCreate(rowCnt, colCnt){
        // Create a reference to the body of the document.
        var body = document.getElementsByTagName("body")[0];

        // Create <table> and a <tbody>
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");

        // Append the <tbody> to the <table>.
        // Append the table to the body.
        tbl.appendChild(tblBody);
        body.appendChild(tbl);

        // Set the table's border to 2 pixels.
        tbl.setAttribute("border", "2");

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
                row.appendChild(cell);
                }
            }

    }
