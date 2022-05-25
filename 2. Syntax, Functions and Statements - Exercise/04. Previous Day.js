function previous(year, month, day) {
    let dt = new Date(year, month-1, day - 1);
    console.log(`${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`);
  }