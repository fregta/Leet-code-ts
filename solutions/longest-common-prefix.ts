

function longestCommonPrefix(strs: string[]): string {
    //initial element is the longest prefix on start
    let solution = strs[0];

    //iter through string starting from 2nd in array
    for (let i = 1; i < strs.length; i++) {
        const element = strs[i];
        //iter through chars in solution
        for (let j = 0; j < solution.length; j++) {
            //check for match
            if (element[j] != solution[j]) {
                if (j == 0) {
                    //if first letters dont match, return "" to forego useless operations
                    return "";
                } else {
                    //otherwise shorten the solution to the matching letters and break character loop
                    solution = solution.substring(0,j);
                    break;
                }
            }
            
        }
    }

    //return the remaining letters from the first string in the array which all the others share.
    return solution;
};