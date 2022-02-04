function Calc(oper, a, b) {
    const isNotANumber = (typeof a !== "number") || (typeof b !== "number") || isNaN(a) || isNaN(b);
    const isOperatorUndefined = (oper == undefined);

    if (isNotANumber || isOperatorUndefined) {
        return "error";
    } 
    switch (oper) {
        case "sum": 
            return a + b;
            break;
        case "multi":
            return a * b;
            break;
        case "ded":
            return a - b;
            break;
        case "div":
            return a / b;
            break;
        case "rem":
            return a % b;
            break;
        case "pow":
            return a ** b;
            break;
        default:
            return "unknown operation";
            break;
    }
}
console.log(Calc("sum", 12, 1));