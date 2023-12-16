//Pasa todos los tests de hackerRank
//https://www.hackerrank.com/challenges/one-month-preparation-kit-tower-breakers-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two
function towerBreakers(n, m) {
    //if(n === 1)return 1
    //if(m === 1)return 2
    //if(n % 2 === 0  )return 2
    //if(n % 2 !== 0  )return 1
    if(m === 1 || n %2 === 0)return 2
    return 1
}

//NOTAS:
/*How to play Tower Breaker Game
Reduce the size of tower such that height of the tower is divisible by current height.
Every tower can be reduce to size of 1.
If the height tower become 1 , you cannot reduce it more.
- Special Case:
If there is only one tower , Player 1 always win. As there will be no options for Player 2.
If the height of tower is 1 , Player 2 always win. As there will be no option for Player 1.
- Even Towers:
Lets take a example , we have two towers of height 4.
case 1:
player1 make the first tower to height 2.
player 2 make the second tower to height 2.
player1 make the first tower to height 1.
player 2 make the second tower to height 1.
Now, player 1 cannot reduce more , so Player 2 wins.
case 2:
player1 make the first tower to height 1.
player 2 make the second tower to height 1.
Now, player 1 cannot reduce more , so Player 2 wins.
- Odd Towers:
Lets take the example of 3 towers of height 3.
case 1:
player1 make the first tower to height 1.
player 2 make the second tower to height 1.
player1 make the third tower to height 1.
Now, player 2 cannot reduce more , so Player 1 wins.*/