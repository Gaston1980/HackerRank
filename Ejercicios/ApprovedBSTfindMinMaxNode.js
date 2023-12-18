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

let findMaxTwo = (root) => {
    let mayores = []
  
    if(!root.right.right){
      mayores.push(root.right.data)
      mayores.push(root.data)
      return mayores
    }
    if(!root.right) return mayores
    if(root.right)  return findMaxTwo(root.right)
  };
 
  let findMinTwo = (root) => {
    let menores = []
  
    if(!root.left.left){
      menores.push(root.left.data)
      menores.push(root.data)
      return menores
    }
    if(!root.left) return menores
    if(root.left)  return findMinTwo(root.left)
  };

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
    console.log(findMaxTwo(root))
    console.log(findMinTwo(root))