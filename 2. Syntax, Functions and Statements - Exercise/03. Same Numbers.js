function same(num) {
    let arr = String(num).split("").map(Number);
    let state = true;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      const first = arr[0];
      sum += arr[i];
      if (first != arr[i]) {
        state = false;
      }
    }
    console.log(state,`\n`,sum);
  }