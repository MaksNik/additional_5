module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 != 0) {
        return false;
    }

    let openBrackets = [];
    let closedBrackets = [];
    let sameBrackets = [];
    let openIndex;
    let stack = [];

    for (let y = 0; y < bracketsConfig.length; y++) {
        if (bracketsConfig[y][0] === bracketsConfig[y][1]) {
            sameBrackets.push(bracketsConfig[y][0]);
        }
        else {
            openBrackets.push(bracketsConfig[y][0]);
            closedBrackets.push(bracketsConfig[y][1]);
        }
    }
    for (let i = 0; i < str.length; i++) {
        for (let z = 0; z < sameBrackets.length; z++) {
            if (str[i] === sameBrackets[z]) {
                if (stack.length === 0) {
                    stack.push(str[i]);
                    break;
                }
                else {
                    let tmp = stack.pop();
                    stack.push(tmp);
                    if (str[i] === tmp) {
                        stack.pop();
                        break;
                    }
                    else {
                        for (let x = 0; x < stack.length; x++) {
                            if (stack[x] === str[i]) {
                                return false;
                            }
                        }
                        stack.push(str[i]);
                        break;
                    }
                }
            }
        }
        for (let j = 0; j < openBrackets.length; j++) {
            if (openBrackets[j] === str[i]) {
                stack.push(str[i]);
                break;
            }
            else if (closedBrackets[j] === str[i]) {
                if (stack.length === 0) {
                    return false;
                }
                let k = stack.pop();
                for (let r = 0; r < openBrackets.length; r++) {
                    if (openBrackets[r] === k) {
                        openIndex = r;
                        break;
                    }
                }
                if (openIndex === j) {
                    break;
                } 
                else {
                    stack.push(k);
                }
            } 
        }
        
    }

    if (stack.length != 0) {
        return false;
    }
    else {
        return true;
    }
}
