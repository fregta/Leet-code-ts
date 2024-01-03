const closers = {
    ')': '(',
    '}': '{',
    ']': '['
}

function isValid(s: string): boolean {

    //define an array that we will use as a stack
    const stack: string[] = [];

    //iter through chars in input string
    for (const char of s.split('')) {

        //if char is a closing bracker
        if (closers.hasOwnProperty(char)) {
            //pop last element of stack
            const opening = stack.pop();

            //if its no the opening bracket to the current closing bracket return false
            if (closers[char] !== opening) {
                return false;
            }
        } else {
            //if its an opening bracket, than push it on top of the stack
            stack.push(char);
        }
    }
    
    //If no opening brackets remain in stack than the input were valid parentheses
    return stack.length == 0;
};