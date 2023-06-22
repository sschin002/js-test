const CC = require('currency-converter-lt')
// let currencyConverters = new CC();
currencies = [
    "USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR", "BRL", 
    "RUB", "ZAR", "MXN", "SAR", "AED"
]
for(int i= 0;i<currencies.length,i++){
    for(int j =1 ,j<currencies.length,j++){
let currencyConverter = new CC({from:currencies[i], to:"", amount:1})
currencyConverter.convert().then((response) => {
    // console.log(response)
})
}
}