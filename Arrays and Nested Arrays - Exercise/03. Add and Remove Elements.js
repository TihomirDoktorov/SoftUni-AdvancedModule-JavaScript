function elements(arr) {
  let initial = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === `add`) {
      initial++;
      newArr.push(initial);
    }
    if (arr[i] === `remove`) {
      newArr.pop();
      initial++;
    }
  }
  if (newArr.length > 0) {
    console.log(newArr.join(`\n`));
  } else console.log(`Empty`);
}

elements(["add", "add", "add", "add"]);
elements(["add", "add", "remove", "add", "add"]);
elements(["remove", "remove", "remove"]);
