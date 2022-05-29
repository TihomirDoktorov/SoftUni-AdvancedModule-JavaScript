function neighbors(arr) {
  let track = 0;
  for (let i = 0; i < arr.length; i++) {
    let arrNow = arr[i];
    if (i + 1 >= arr.length) {
      break;
    }
    let arrLater = arr[i + 1];
    for (let j = 0; j < arrNow.length; j++) {
      if (arrNow[j] === arrLater[j]) {
        track++;
      }
    }
  }
  console.log(track);
}

neighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
neighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
