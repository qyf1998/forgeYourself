// JavaScript source code

// get the nth fib number 
const fib = (n) => {
    if (n <= 2) return 1;
    n = fib 
    return fib(n - 1) + fib(n - 2);
};



//console.log(fib(6));    //8
//console.log(fib(11));   //89
//console.log(fib(50));   // not efficient enough to run, take a lot of times


const newfib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = newfib(n - 1, memo) + newfib(n - 2, memo);
    return memo[n];
}


console.log(newfib(6));    //8
console.log(newfib(11));   //89
console.log(newfib(50));   // 12586269025