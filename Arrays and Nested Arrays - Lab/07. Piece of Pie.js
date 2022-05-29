function peice(arr, string1, string2) {
  let start = 0;
  let finish = 0;
  let arrObj = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === string1) {
      start = i;
      break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === string2) {
      finish = i;
      break;
    }
  }
  arrObj = arr.slice(start, finish + 1);
  return arrObj;
}

peice(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
peice(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
