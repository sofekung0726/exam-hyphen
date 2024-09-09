const checkNum = (arr , target) => {
    const foundNumbers = new Set();
    for(const num of arr) {
        const balance = target - num
        if (foundNumbers.has(balance)) {
            return true;
    }
    foundNumbers.add(num)
    }
    return false
    
}

const array = [1, 5, 13, 2, 7, 6]
const targetNum = 11

console.log(checkNum(array,targetNum));
