/*
 * Joshua Reed
 * OSU EECS
 * CS 290 -> Web Design
 * Summer, 2017
 *
 * script.js
 *
 * Description: Completes excercises from W3Schools on DOM.
 */

// Main function to be called onload of document body.
function main(){
    document.getElementById("demo").innerHTML = "Good Job!";
    document.getElementsByTagName("p")[1].innerHTML = "Good Job!!!";
    document.getElementsByClassName("test")[0].innerHTML = "Good Job!!!!!";
    document.querySelectorAll("p")[3].innerHTML = "Good Job";

    // Append the title to the page
    var para = document.createElement("p"); // Create Paragraph.
    var t = document.createTextNode(document.title); // Create Text.
    para.appendChild(t);
    document.body.appendChild(para);
}


