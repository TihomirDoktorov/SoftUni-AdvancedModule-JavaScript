function delimiter(arr, string) {
  let final = ``;
  for (let i = 0; i < arr.length - 1; i++) {
    final += arr[i] + string;
  }
  final += arr[arr.length-1];
  console.log(final);
}

delimiter(["One", "Two", "Three", "Four", "Five"], "-");

delimiter(["How about no?", "I", "will", "not", "do", "it!"], "_");
