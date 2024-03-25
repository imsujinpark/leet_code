function findDuplicates(nums: number[]): number[] {
    let numSet = new Set();
    let number = [];

    for(let i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
            number.push(nums[i]);
        }

        numSet.add(nums[i]);
    }

    return number;
};