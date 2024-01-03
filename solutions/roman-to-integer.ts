
const values = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C':100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL':40,
    'XC': 90,
    'CD': 400,
    'CM': 900
}



function romanToInt(roman: string) : number {

    let result = 0;

    const stringArray = roman.split('');
    const letters = Object.keys(values);

    for (let i = 0; i < stringArray.length; i++) {

        const currentValue = stringArray[i];
        const nextValue = stringArray[i+1];

        if(letters.includes(currentValue + nextValue)) {
            result += values[currentValue + nextValue];
            i++;
        } else {
            result += values[currentValue];
        }
    }

    return result;
}
