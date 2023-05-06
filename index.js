const sumItems = function(arr) {
  let sum = 0;
  arr.forEach(item => {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else if (typeof item === "number") {
      sum += item;
    }
  });
  return sum;
};

console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]));

module.exports = sumItems;