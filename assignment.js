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
console.log("Total Food Price : " + totalFoodPrice)