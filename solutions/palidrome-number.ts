
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
const isPalindrome = (input: number): boolean => {
    if (input < 0) {return false};

    const stringValue = input.toString();

    for (let index = 0; index < stringValue.length; index++) {
        const reverseIndex = stringValue.length - 1 - index;
        if (stringValue[index] != stringValue[reverseIndex]) {
            return false
        }
        if (index >= reverseIndex) {
            break
        }
    }

    return true;
}