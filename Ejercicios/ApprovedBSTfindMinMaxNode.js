let findMinNode = (root)=>{
    // if left of a node is null
    // then it must be minimum node
    if(root.left === null)
        return root.data;
    else
        return findMinNode(root.left);
}

let findMaxNode = (root)=>{
    // if rigth of a node is null
    // then it must be max node
    if(root.right === null)
        return root.data;
    else
        return findMaxNode(root.right);
}

var root = { //tree
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
  
    
    console.log(findMinNode(root))
    console.log(findMaxNode(root))
