function sum(arr) {
  console.log(Number(arr.shift()) + Number(arr.pop()));
}

sum([`20`, `30`, `40`]);
sum([`5`, `10`]);
