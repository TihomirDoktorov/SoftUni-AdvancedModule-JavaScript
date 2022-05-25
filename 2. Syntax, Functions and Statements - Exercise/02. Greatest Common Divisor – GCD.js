function divisor(x, y) {
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  console.log(x);
}

divisor(15, 5);
divisor(2154, 458)
