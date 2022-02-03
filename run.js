function Calc(oper, a, b) {
    const isNotANumber = (typeof a !== "number") || (typeof b !== "number") || isNaN(a) || isNaN(b);
    const isOperatorUndefined = (oper == undefined);

    if (isNotANumber || isOperatorUndefined) {
        return "error";
    } else if (oper == "sum") {
        return a + b;
    } else if (oper == "multi") {
        return a * b;
    } else if (oper == "ded") {
        return a - b;
    } else if (oper == "div") {
        return a / b;
    } else if (oper == "rem") {
        return a % b;
    } else if (oper == "pow") {
        return a ** b;
    } else {
        return "unknown operation";
    }
};

console.log(Calc("div", 12, 1))