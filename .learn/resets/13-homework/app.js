// app.js file content
console.log("Hello World")

//funcion de suma
const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = (dollar) => {
    //codigo de dolar a yen
}

const fromEuroToDollar = (euro) => {
    //codigo de euro a dolar
    let amountindollar = euro * 1.2;
    return amountindollar;
}

const fromYanToPound = (yen) => {

}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

module.exports = { sum, fromEuroToDollar };