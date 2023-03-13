//1
//write the countElements() function, which takes a CSS selector 
//as a parameter and returns the number of corresponding elements
const countElements = (selector) => {
    if(typeof selector === "string") return Array.from(document.querySelectorAll(selector)).length;
    return "Selector should be of type String!";
}

console.log(countElements(1));

//2
// Write a JavaScript function linkInfo(), 
//that shows the following:

//The total number of links
//The target of the first and last links

//This function should work even if no links are 
//present. The return type of the function will be
//a string and will be formatted as such:

//"Total Links: x, First link: y, Last link: z"

//If no links are present, then the following string should be returned.

//"Link Count is zero"

console.log();
console.log("TASK2...");

const linkInfo = () => {
    const elements = Array.from(document.getElementsByTagName("a"));
    
    const links = elements.map(e => e.href);
    const arrayLength = links.length;

    if(arrayLength === 0) return "Link Count is zero";

    const firstLink = links[0];
    const lastLink = links[arrayLength - 1];

    return `Total Links: ${arrayLength}, First link: ${firstLink}, Last link: ${lastLink}`;
}

console.log(linkInfo());

//task3
//Write a has() function that tests if an element
//designated by its ID has a class. The function shows
//true, false or an error message ID not found if 
//the element can’t be found.
console.log("\n Task3");

const has = (id, someClass) => {
    const element = document.getElementById(id);
    if(element !== null) {
        return element.classList.contains(someClass);
    } else {
        return "ID not found";
    }
}