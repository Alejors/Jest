// app.js file content
console.log("Hello World")

//funcion de suma
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

const fromDollarToYen = (dollar) => {
    //codigo de dolar a yen

    //OPCION CON AUX DE EURO
    // let amountineuro = dollar/1.2;
    // let amountinyen = amountineuro * 127.9;
    
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
    
    //OPC CON AUX DE EURO
    // let amountineuro = yen / 127.9;
    // let amountinpound = amountineuro * 0.8;
    
    let amountinpound = parseFloat((yen * 0.006254887).toFixed(6));
    return amountinpound;
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };