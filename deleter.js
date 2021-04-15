function deleteAllEvenLengthElems(array) {
  let collection = [];
  let countedCollection = new Map();

  array.forEach((el) => {
    if (
      !JSON.stringify(collection).includes(JSON.stringify(el)) ||
      ((Number.isFinite(el) ||
        Number.isNaN(el) ||
        el === null ||
        el === undefined) &&
        !collection.includes(el))
    ) {
      collection.push(el);
    }
  });

  console.log(collection);

  collection.forEach((el) => {
    let filtred = array.filter((i) => {
      if (i === null && el === null) {
        console.log(el, i, el === null && i === null);
        return true;
      }
      if (infinityCheck(i) && infinityCheck(el)) {
        return true;
      }
      if (Number.isNaN(i) && Number.isNaN(el)) return true;
      if (typeof i === "object" && !(i === null) && !(el === null))
        return JSON.stringify(i) === JSON.stringify(el);
      return i === el;
    }).length;
    countedCollection.set(el, filtred);
  });

  console.log(countedCollection);

  filtredArray = [].concat(array);

  for (let [key, value] of countedCollection) {
    if (!(value & 1)) {
      filtredArray = filtredArray.filter((i) => {
        if (
          typeof i === "object" &&
          typeof key === "object" &&
          !(i === null) &&
          !(key === null)
        )
          return JSON.stringify(i) === JSON.stringify(key);

        if (infinityCheck(key) && infinityCheck(i)) {
          return false;
        }

        if (Number.isNaN(key) && Number.isNaN(i)) return false;

        return key !== i;
      });
    }
  }
  return filtredArray;
}

function infinityCheck(element) {
  return (
    !Number.isFinite(element) &&
    typeof element === "number" &&
    element == "Infinity"
  );
}
