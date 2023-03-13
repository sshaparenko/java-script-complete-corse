//getElementByTagName returnes a NodeList of all nodes with h2 tag name
//The NodeList objects are not real JS least. Use Array.from() to turn NodeList to list
const titleElements = document.getElementsByTagName("h2");

for(const element of titleElements) {
    console.log(element.innerHTML);
}

const existingElements = Array.from(document.getElementsByClassName("exists"));
for(const element of existingElements) {
    console.log(`Exists: ${element.innerHTML}`);
}

//HTML content can be retrieved by .innerHTML()
console.log(`inner HTML ${document.getElementById("content").innerHTML}`);

//.textContent returnes all the text content of a DOM element
console.log(`inner text: ${document.getElementById("content").textContent}`);

//attributes
//to return an attribute we can use he node.getAttribute("name");
console.log(`New Wonders of the World: ${document.getElementsByTagName("a")[1].getAttribute("href")}`);

//also it is possible to get attribute through dot. 
//This is true for .id .htef and .value
console.log(`Second ul id: ${document.getElementsByTagName("ul")[1].id}`) 

//classes
//classList property retrieves a DOM eleemnt's list of classes
const classes = document.getElementById("ancient").classList;
console.log(`class with id = "ancient": ${classes[0]}`);
