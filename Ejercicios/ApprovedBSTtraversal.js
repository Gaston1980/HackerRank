//Imprimir los nodos de un arbol segun el orden: preOrder, inOrder, postOrder

let preOrder = function(root) {
    if (root){
    console.log(root.data)
    preOrder(root.left);
    preOrder(root.right);
}
}

let inOrder = (root) =>  {
    if(root)
    {
        inOrder(root.left);
        console.log(root.data);
        inOrder(root.right);
    }
}

let postOrder = (root) =>  {
    if(root)
    {
        postOrder(root.left);
        postOrder(root.right);
        console.log(root.data);
    }
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

  console.log(preOrder(root))
  console.log(inOrder(root))
  console.log(postOrder(root))
 