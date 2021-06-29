const isEmptyVal = (val) => {
  return !!(
    !val ||
    val.toString().trim() === "" ||
    typeof val === undefined ||
    val.length === 0
  );
};

export { isEmptyVal };
