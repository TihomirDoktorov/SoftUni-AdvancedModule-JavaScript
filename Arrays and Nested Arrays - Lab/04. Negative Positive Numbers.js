function nums(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr2.unshift(arr[i]);
    } else arr2.push(arr[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
      console.log(arr2[i]);
      
  }
}

nums([7, -2, 8, 9]);
nums([3, -2, 0, -1]);
