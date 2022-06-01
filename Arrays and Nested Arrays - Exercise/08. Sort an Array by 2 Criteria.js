function twoCriteria(arr) {
  arr.sort(twoCriteriaSort);
  return arr.join(`\n`)
  function twoCriteriaSort(current, next) {
    if (current.length === next.length) {
      return current.localeCompare(next);
    }
    return current.length - next.length;
  }
}

twoCriteria(["alpha", "beta", "gamma"]);
twoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
twoCriteria(["test", "Deny", "omen", "Default"]);
