function func(arr) {
  return Math.max(
    ...arr
      .join("")
      .match(/(.)\1*/g)
      .map((el) => el.length)
  );
}
