
//method of O(n^2) time complexity
const twoSum = function(nums : number[], target: number) {
    let solution : number[] = [];
    for (let index = 0; index < nums.length; index++) {
       for (let index2 = 1; index2 < nums.length; index2++) {
           if (nums[index] + nums[index2] == target) {
               if (index == index2){continue}
               else {
                   solution.push(index)
                   solution.push(index2)
               break}
               
           }
       } if(solution.length != 0) {break}
   }
   return solution
};

//method of O(n) time complexity
const twoSumMap = function(nums: number[], target: number): number[] {
    const map: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }

    return [];
};


console.log(twoSum([2,7,11,15], 9))
console.log(twoSumMap([2,7,11,15], 9))