export function evalCalcResult(result: string): string {
    if (!result) {
        return result;
    } 
    try {
        return String(eval(result));
    } catch(e) {
        return "ERR: SYNTAX!!!";
    }
}