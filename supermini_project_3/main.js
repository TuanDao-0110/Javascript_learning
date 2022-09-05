const isPromoCodeValid = (code) => {
   let value=  String(code)
    return value.length >= 5 && value.length <= 10 ? 'valid' : 'non valid'
}


console.log(isPromoCodeValid(4242424))