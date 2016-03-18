function validCard(n) {
  n = n.toString().split('').map(Number).reverse();
  return n.reduce(function (sum, digit, index) {
    var digit1 = digit;
    if (index & 1) digit <<= 1;
    if (digit > 9) digit -= 9;
    return sum + digit;
  }, 0) % 10 == 0;
}
validCard("5457 1125 9323 4311")

