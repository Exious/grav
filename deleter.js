function deleteAllEvenLengthElems(array) {
  let collection = [];
  let countedCollection = new Map();

  array.forEach((el) => {
    if (
      !JSON.stringify(collection).includes(JSON.stringify(el)) ||
      ((Number.isFinite(el) || Number.isNaN(el)) && !collection.includes(el))
    ) {
      collection.push(el);
    }
  });

  collection.forEach((el) => {
    let filtred = array.filter((i) => {
      if (Number.isNaN(i) && Number.isNaN(el)) return true;
      if (typeof i === "object")
        return JSON.stringify(i) === JSON.stringify(el);
      return i === el;
    }).length;
    countedCollection.set(el, filtred);
  });

  filtredArray = [].concat(array);

  for (let [key, value] of countedCollection) {
    if (!(value & 1)) {
      filtredArray = filtredArray.filter((i) => {
        if (typeof i === "object" && typeof key === "object")
          return JSON.stringify(i) === JSON.stringify(key);

        if (
          !Number.isFinite(key) &&
          !Number.isFinite(i) &&
          typeof key === "number" &&
          typeof i === "number" &&
          key == "Infinity" &&
          i == "Infinity"
        ) {
          return false;
        }

        if (Number.isNaN(key) && Number.isNaN(i)) return false;

        return key !== i;
      });
    }
  }
  return filtredArray;
}
