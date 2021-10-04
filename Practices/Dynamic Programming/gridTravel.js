// You are a traveer on a 2D grid, you begin in top-left corner, and want to travel to the bottom-right corner

// in how many ways can you travel in a m*n grid?

// Write a function gridTravel(m,n) that calculates this


const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
    
}


//console.log(gridTraveler(1, 1)); //1
//console.log(gridTraveler(3, 3)); //6
//console.log(gridTraveler(18, 18)); //??


const newgridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key]; 
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] =  newgridTraveler(m - 1, n, memo) + newgridTraveler(m, n - 1, memo);
    return memo[key];
}

console.log(newgridTraveler(18, 18));