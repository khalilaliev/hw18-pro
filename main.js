const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const removeElement = (array, item1, item2) => {
  const deletedNumber = array.filter((element) => {
    return element !== item1 && element !== item2;
  });
  return deletedNumber;
};
console.log("removeElement:", removeElement(arr, 3, 10));
