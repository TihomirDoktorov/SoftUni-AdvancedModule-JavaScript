function position(arr) {
  let list = ``;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      list += ` ` + arr[i];
    }
  }
  console.log(list);
}

position(["20", "30", "40", "50", "60"]);
