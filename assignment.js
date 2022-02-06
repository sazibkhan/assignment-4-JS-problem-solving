//Question :1 
function anaToVori(ana) {
    return ana / 16;
}
let ana = 32;
let totalGoldUnit = anaToVori(ana);
console.log("Total Gold Unit :" + totalGoldUnit);



//Question :2
function pandaCost(singara, chamuca, jilipi) {
    const singaraPrice = 7;
    const chamucaPrice = 10;
    const jilipiPrice = 15;

    let totalPrice = (singaraPrice * singara) + (chamucaPrice * chamuca) + (jilipiPrice * jilipi);
    return totalPrice;
}
let totalFoodPrice = pandaCost(5, 2, 6);
console.log("Total Food Price : " + totalFoodPrice);



//Question :3
function picnicBudget(peoples) {
    const first100HeadCost = 5000;
    const second100HeadCost = 4000;
    const third100HeadCost = 3000;
    let total = 0;
    if (Number.isInteger(peoples) == true && peoples > 0) {
        if (peoples >= 1 && peoples <= 100) {
            total = peoples * first100HeadCost;
            return total;
        } else if (peoples > 100 && peoples <= 200) {
            let first100Total = 100 * first100HeadCost;
            let second100Total = (peoples - 100) * second100HeadCost;
            total = first100Total + second100Total;
            return total;
        } else {
            let thirdTotal = (peoples - 200) * third100HeadCost;
            let firstTotal = 100 * first100HeadCost;
            let secondTotal = 100 * second100HeadCost;
            total = firstTotal + secondTotal + thirdTotal;
            return total;
        }
    } else {
        return "User input accept only Positive and Integer Number"
    }
}

console.log("Total Picnic Budget :" + picnicBudget(305));