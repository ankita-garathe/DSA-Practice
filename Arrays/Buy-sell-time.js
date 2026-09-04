//Brute Force

function maxProfit(prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {

        for (let j = i + 1; j < prices.length; j++) {

            let profit = prices[j] - prices[i];

            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// 5