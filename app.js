// app.js file content
console.log("Hello World")

//funcion de suma
const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = (dollar) => {
    //codigo de dolar a yen
    let amountinyen = dollar * 106.58333;
    return amountinyen;
}

const fromEuroToDollar = (euro) => {
    //codigo de euro a dolar
    let amountindollar = euro * 1.2;
    return amountindollar;
}

const fromYenToPound = (yen) => {
    //codigo yen a pound
    let amountinpound = parseFloat((yen * 0.006254887).toFixed(6));
    return amountinpound;
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };