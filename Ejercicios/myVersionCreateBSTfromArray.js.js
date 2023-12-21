//Create a Binary Search Tree from a given array
// Return n of times we used the insert() method
// and the BST built

var Tree = function() {
  this.root = null;
}

Tree.prototype.insert = function(node, data) {
    //console.log("node:",node,"data:",data)
  if (node == null){
    node = new Node(data);
    //console.log("Newnode:",node)
  }
 else if (data < node.data){
      node.left  = this.insert(node.left, data);
  }
  else{
      node.right = this.insert(node.right, data);   
  }

  return node;
}



var Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
let createBST = (data) => {
  var newTree = new Tree()//instancio el arbol
  var node = new Node(data[0])//instancio primer nodo
  newTree.root = node //asigno nodo al root
  let contador = 0 //para contar las veces use insert()
  for(let i=1; i<data.length; i++){
    newTree.insert(node,data[i])
    contador ++
    
}
return "Insert:" + contador + " " + "BST:" + newTree
}
  


var data = ([10,5,3,15,6,8,33])
console.log(createBST(data))



//Notas: copiar todo el codigo (incluyendo las clases y metodos) y pegarlo en la consola de un browser
//para poder ver resultado del arbol devuelto
//Copiar el objeto que devuelve la consola y pegarlo en el VSC
// para poder leer bien las ramificaciones del arbol
/* newTree = {
  "root": {
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
} */

    


