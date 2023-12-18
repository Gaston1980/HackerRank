
// Search for a node with given data
let searchNode = (node, data) =>{
   // if trees is empty return null
    if(node === null)
        return null;
 
    // if data is less than node's data
    // move left
    else if(data < node.data)
        return searchNode(node.left, data);
 
    // if data is more than node's data
    // move right
    else if(data > node.data)
        return searchNode(node.right, data);
 
    // if data is equal to the node data 
    // return node
    else
        return node;
}

var data = 10
var node = { //tree
    "data": 10,
      "left": {
        "data": 5,
        "left": {
          "data": 3,
          "left": null,
          "right": null
        },
        "right": {
          "data": 6,
          "left": null,
          "right": {
            "data": 8,
            "left": null,
            "right": null
          }
        }
      },
      "right": {
        "data": 15,
        "left": null,
        "right": {
          "data": 33,
          "left": null,
          "right": null
        }
      }
    }

    console.log(searchNode(node,data))
