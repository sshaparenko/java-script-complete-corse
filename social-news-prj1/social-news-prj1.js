/**
 * A link is defined by its title, its URL and its 
 * author (submitter).
 * 
 * If a new link URL does not start with
 * "http://" or "https://", "http://" 
 * is automatically added to its beginning.
 * 
 * At launch, the program displays a start menu
 * with the possible actions in an alert window 
 * and asks the user for his choice. 
 * Possible actions are:
 *      Show the list of links.
 *      Add a new link.
 *      Remove an existing link.
 *      Quit the program.
 * 
 * Showing the list of links displays the index (rank)
 * and the properties of each link in an alert window,
 * or a message in the absence of any link.
 * 
 * When adding a link, the program asks the user for
 * the new link properties (title, URL and author). 
 * The link is then created. Subsequently, it must 
 * appear in the shown links.
 * 
 * When removing a link, the user is asked for the link
 * index until it is correct. The associated link is 
 * then removed. Subsequently, it must disappear from 
 * the shown links. Removing a link is not possible if 
 * there are no existing links.
 * 
 * After an action is performed, the start menu is 
 * shown again. This goes on until the user chooses to 
 * quit the program.
 */

const links = [];

function Link(name, url, author){
    this.name = name;
    this.url = url;
    this.author = author;
    this.description = function() {
        return `${this.name} (${this.url}). Author: ${this.author}`;
    }
}

let addLink = (name, url, author) => {
    if(!url.startsWith("http://") && !url.startsWith("https://"))
        url = "http://".concat(url);
    links.push(new Link(name, url, author));
}

let getLinksAsStrings = (links) => {
    const temp = links;
    temp.map(link => link.description);
    const finalString = temp.reduce((acc, value) => acc += value.description() + '\n', "");
    return finalString;
};

let removeLink = (index) => {
    let element = links[index];
    if(element === undefined) return false;
    links.splice(index, 1);
    return true;
}

console.log(getLinksAsStrings(links));

function showDeletePrompt(length) {
    const index = prompt(`Enter the index of link to be removed. Can be from 1 to ${length}`);
    const result = removeLink(index - 1);
    result ? alert("Links was deleted!") : showDeletePrompt(length);
}

function showPrompt(msg) {
    const option = prompt(message);
    if(option === "1") {
        if(links.length === 0) 
            alert("There is no links yet");
        else
            alert(getLinksAsStrings(links));
        showPrompt(msg);
    } else if(option === "2") {
        const name = prompt("Enter name");
        const url = prompt("Enter URL");
        const author = prompt("Enter Author name");
        addLink(name, url, author);
        alert("Links was added successfuly");
        showPrompt(msg);
    } else if(option === "3") {
        const length = links.length;
        if(length !== 0) {
            showDeletePrompt(length);
        } else {
            alert("There are no links to delete for now");
        }
        showPrompt(msg);
    } else if(option === "0") {
        alert("Bye!");   
    } else {
        showPrompt(msg);
    }
}
const message = "Choose an option:\n 1:Show links\n 2:Add a link\n 3:Remove a link\n 0:Quit";
showPrompt(message);



