function list(arrNames) {
  arrNames.sort((a,b) => a.localeCompare(b));
  for (let i = 0; i < arrNames.length; i++) {
    console.log(`${i+1}.${arrNames[i]}`);
  }
}

list(["John", "Bob", "Christina", "Ema"]);
