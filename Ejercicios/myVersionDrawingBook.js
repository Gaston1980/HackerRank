//Pasa todos los tests de HackerRank
//https://www.hackerrank.com/challenges/one-month-preparation-kit-drawing-book/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two
function pageCount(n, p) {
    let middle = Math.floor(n / 2)
    console.log(middle)
      if(p === n -1 && p > 4)return 1
      if(p <= middle){
          let flipsStart = Math.floor(p/2)
          return flipsStart
      }else{
        let pages = n - p
        let flipsBack = Math.floor(pages/2)
        return flipsBack
      } 

}
var p = 9
var n = 10
console.log(pageCount(n,p))