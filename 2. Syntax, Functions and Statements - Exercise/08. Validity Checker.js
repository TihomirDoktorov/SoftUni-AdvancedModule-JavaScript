function checker(x1, y1, x2, y2) {
  let valid1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
  let valid2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  let valid3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  if (Number.isInteger(valid1)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  if (Number.isInteger(valid2)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  if (Number.isInteger(valid3)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

checker(3, 0, 0, 4);
checker(2, 1, 1, 1);
