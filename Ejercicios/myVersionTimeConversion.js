//Pasa todos los tests de hackerRank
/*Given a time in -hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
Example
Return '12:01:00'.
Return '00:01:00'.

Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
timeConversion has the following parameter(s):
string s: a time in  hour format
Returns
string: the time in  hour format
*/

function timeConversion(s) {
    const obj = {
        1 : "13",
        2 : "14",
        3 : "15",
        4 : "16",
        5 : "17",
        6 : "18",
        7 : "19",
        8 : "20",
        9 : "21",
        10 : "22",
        11 : "23",
        12 : "12"
    }
    if(s.charAt(8) === "P" && s.slice(0,2) < 10){
        let slicedTime = s.slice(2,8);
        for(var keys in obj){
            if( keys === s.slice(1,2) ){
                let newTime = obj[keys]
                let result = newTime.concat(slicedTime)
                return result
            }
        }
    }else if(s.charAt(8) === "P" && s.slice(0,2) > 9){
        let slicedTime = s.slice(2,8);
        for(var keys in obj){
            if( keys === s.slice(0,2) ){
                let newTime = obj[keys]
                let result = newTime.concat(slicedTime)
                return result
            }
        }
    }else if(s.charAt(8) === "A" && s.slice(0,2) === "12"){
        let slicedTime = s.slice(2,8);
        return "00" + slicedTime
    }else{
        return s.slice(0,8)
    }

}

var s = "01:05:45AM"
console.log(timeConversion(s))