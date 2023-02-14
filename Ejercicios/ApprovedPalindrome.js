
 
    // This method returns -1 if it is
    // not possible to make string a palindrome.
    // It returns -2 if string is already
    // a palindrome. Otherwise it returns
    // index of character whose removal can
    // make the whole string palindrome.
    function possiblePalinByRemovingOneChar(str){
        const isPalindrome = (str, low, high) => {
        while (low < high){
            if (str.charAt(low) != str.charAt(high))
                return false;
            low++;
            high--;
        }
        return true;
    }
 
        // Initialize low and right
        // by both the ends of the string
        var low = 0, high = str.length - 1;
 
        // loop until low and
        // high cross each other
        while (low < high)
        {
 
            // If both characters are equal then
            // move both pointer towards end
            if (str.charAt(low) == str.charAt(high))
            {
                low++;
                high--;
            }
            else
            {
 
                /*
                * If removing str[low] makes the
                * whole string palindrome. We basically
                * check if substring str[low+1..high]
                * is palindrome or not.
                */
                if (isPalindrome(str, low + 1, high))
                    return low;
 
                /*
                * If removing str[high] makes the whole string
                * palindrome. We basically check if substring
                * str[low+1..high] is palindrome or not.
                */
                if (isPalindrome(str, low, high - 1))
                    return high;
                return -1;
            }
        }
 
        // We reach here when complete string
        // will be palindrome if complete string
        // is palindrome then return mid character
        return -2;
    }
 
    console.log(possiblePalinByRemovingOneChar("aaamk"))
    //NOTA: pasa los tests de HackerRank