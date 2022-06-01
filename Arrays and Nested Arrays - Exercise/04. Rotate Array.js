function rotation(arr, num) {
  for (let i = 0; i < num; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(` `));
}

rotation(["1", "2", "3", "4"], 2);
rotation(["Banana", "Orange", "Coconut", "Apple"], 15);
