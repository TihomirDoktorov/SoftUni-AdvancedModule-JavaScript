function cook(num, op1, op2, op3, op4, op5) {
  let number = Number(num);
  let list = [op1, op2, op3, op4, op5];
  for (let i = 0; i < list.length; i++) {
    switch (list[i]) {
      case "chop":
        number = number / 2;
        console.log(number);
        break;
      case `dice`:
        number = Math.sqrt(number);
        5;
        console.log(number);
        break;
      case `spice`:
        5;
        number++;
        console.log(number);
        break;
      case `bake`:
        number = number * 3;
        console.log(number);
        break;
      case `fillet`:
        number *= 0.8;
        console.log(number);
        break;
      default:
        console.log(`error`);
        break;
    }
  }
}

cook("32", "chop", "chop", "chop", "chop", "chop");
