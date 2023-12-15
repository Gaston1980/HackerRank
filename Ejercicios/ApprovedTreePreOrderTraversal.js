//Pasa todos los test de HackerRank
//Complete the  function in the editor below, 
//which has one parameter: a pointer to the root of a binary tree. 
//It must print the values in the tree's preorder traversal as a single line of space-separated values.
function preOrder(root) {
    if (root){
    process.stdout.write(root.data + " ")//no use console.log() xq necesito imprimir todo en una sola linea
    preOrder(root.left);
    preOrder(root.right);
    }
}

//NOTAS: The key to solve this challenge is by using recursion. 
//We keep printing the data and recalling the function with left and right as the parameter and eventually stop when there are no more nodes left.
//We’re visiting all the nodes and use no extra data structure so we have O(n) time and O(1) space complexity.
// https://www.hackerrank.com/challenges/one-week-preparation-kit-tree-preorder-traversal/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-seven