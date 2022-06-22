const { sum } = require('./app.js');

//primera prueba

test('suma 14 + 9 es 23', () => {
    let total = sum(14, 9);
    //abajo va el prueba, arriba esta la funcion
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

//TEST PARA DOLAR A YEN
test("Un dolar debería ser 106,5833 Yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const Yens = fromDollarToYen(3)
    const expected = 3 * 106.58333; 
    
     expect(fromDollarToYen(3)).toBe(319.74999);
})
//TEST PARA YEN A LIBRA
test("Un Yen debería ser 0.006254887 libras", function(){
    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(15000)
    const expected = (15000 * .006254887); 
    
     expect(fromYenToPound(15000)).toBe(93.823305);
})