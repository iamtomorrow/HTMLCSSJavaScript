// nothing to say about this code, because it is actually the same logic as the previous one;

function destroyer(arr) {
    let arrLen = arr.length;
    let newArr = [];
    let numberOfArgs = arguments.length;
    let match = 0;
    let test = 0;
    // arguments[0] = arr;

    for (let i = 0; i < arrLen; i++) {
        for (let e = 1; e < numberOfArgs; e++) {
            var arg = arguments[e];
            if (arr[i] == arg) {
                console.log(arr[i]);
                match++;
            } 
        }
        if (match == test) {
            newArr.push(arr[i]);
        }
        test = match;
    }

    return newArr;
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
