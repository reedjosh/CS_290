// Joshua Reed
// Oregon State University EECS
// CS 290 -> Web Development
// Summer, 2017
//
// Description: This creates two forms.
// Form One: Enter zipcode and get back weather.
// Form Two: Post data to httpbin.

var apiKey = "93236df1ddf7f87fc85e36c31a38b419"; // weather key

function main(){
    document.getElementById('weatherForm').addEventListener('submit', handleFormSubmitWeather);
    document.getElementById('httpBinForm').addEventListener('submit', handleFormSubmitBin);
    }
/**    
 * This inspired by https://code.lengstorf.com/get-form-values-as-json/ 
 *
 * Checks an element for a name and value -> thus it is probably a valid form input.
 * @param  {Element} element  the element of a form.
 * @return {Bool}             true if both element name and value are non-empty.
 */
function isValidElement(element){
    return element.name && element.value; // This works because empty strings are considered false.
    }

/**    
 * This inspired by https://code.lengstorf.com/get-form-values-as-json/ 
 *
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
function formToJson(elements){
    return [].reduce.call(elements, function(data, element){
        if (isValidElement(element)) data[element.name] = element.value;
        return data;}, {});
    }

/**    
 * This function prevents the default form submit action and replaces it with another.
 * @param  {Object} event  The event to be manipulated.
 * @return  void
 */
function handleFormSubmitWeather(event){
    event.preventDefault();
    
    // Get the weatherForm.
    // Convert it to a JSON object and print it to the console.
    var form = document.getElementById('weatherForm');
    var data = formToJson(form.elements);
    console.log(JSON.stringify(data));
    if (data.zipcode) submitZip(data.zipcode);
    else if (data.city) submitCity(data.city);
    }

/**    
 * This function prevents the default form submit action and replaces it with another.
 * @param  {Object} event  The event to be manipulated.
 * @return  void
 */
function handleFormSubmitBin(event){
    event.preventDefault();
    postToHTTPBin();
    }

function printJson(obj){
    for (var key in obj){
        if (typeof obj[key] === "object" && obj[key] !== null) printJson(obj[key]);
        else console.log(key + ' ' + obj[key]);
        }
    }


function postToHTTPBin(){
    var req = new XMLHttpRequest();
    req.open("POST", "http://httpbin.org/post", true);
    req.addEventListener('load', function(){
        if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
            document.getElementById('outData').textContent = response.data;
            printJson(response);
            console.log(response);
            } 
        else console.log("Error in network request: " + req.statusText);
        }); 
        req.send(JSON.stringify({"Test":"TEST"}));
    }

/**    
 * Submits a get request asynchronously to openweathermap based upon zip.
 * @param  {String} zip  The US zipcode of the city to request weather data from.
 * @return  void
 */
function submitZip(zip){
    var req = new XMLHttpRequest();
    console.log(zip);
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=" + apiKey, true);
    req.addEventListener('load', function(){
        if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
            document.getElementById('locationReadOut').textContent = response.name;
            document.getElementById('weather').textContent = (response.main.temp*9/5-459.67).toFixed(2) + "F";
            printJson(response);
            } 
        else console.log("Error in network request: " + req.statusText);
        }); 
        req.send(null);
    }


/**    
 * Submits a get request asynchronously to openweathermap based upon city.
 * @param  {String} city  The US city to request weather data from.
 * @return  void
 */
function submitCity(city){
    var req = new XMLHttpRequest();
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey, true); 
    req.addEventListener('load', function(){
        if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
            document.getElementById('locationReadOut').textContent = response.name;
            document.getElementById('weather').textContent = (response.main.temp*9/5-459.67).toFixed(2) + "F";
            for (var key in response) console.log(key + response[key]);
            } 
        else console.log("Error in network request: " + req.statusText);
        }); 
       req.send(null);
    }
