//1
/**
 * Your mission here is to create a showChild() 
 * function that shows one of the children of a DOM 
 * element node. This function takes as a parameter 
 * the parent node and the child node index. 
 * Error cases like a non-element node or an 
 * out-of-limits index must be taken into account.
 */
console.log("Task1....");
const showChild = (parent, childIndex) => {
    if(parent.nodeType === document.ELEMENT_NODE) {
        const childLength = parent.children.length;
        //const parentElement = document.querySelector(parent);
        if(childIndex < childLength-1 && childIndex > 0) return parent.childNodes[childIndex].nodeName;
        return "Wrong Index";
    } else {
        return "Wrong Node Type";
    }
};

function showChildtwo (node, index){ 
  
  var c = node.children; 
  if(index < 0 || (c && index >= c.length)){ 
    console.error("Wrong Index");
  }
  else if(node.childNodes[index] === undefined){
    console.error("Wrong Node Type");
  } 
  else{
    console.error(node.childNodes[index].nodeName);
  }
};

let start = performance.now();
console.log(showChild(document.body, 1));
let timeTaken = performance.now() - start;
console.log(`first is ${timeTaken} ms`);
start = performance.now()
showChildtwo(document.body, 1);
timeTaken = performance.now() - start;
console.log(`second is ${timeTaken} ms`);
