export const toInteger = (value: string | null) => {
  if (!value) {
    return 0;
  }
  const floatValue = parseFloat(value);

  if (!floatValue) {
    return 0;
  }

  return Math.round(floatValue);
};

export const noInfoIfZero = (price: string | null) => {
  const zeroPrices = ["0", "0원", 0];
  if (zeroPrices.some(zeroPrice => zeroPrice === price)) {
    return "가격 정보 없음";
  }
  return price;
};

export const traverseObjectKeys = (
  o: { [key: string]: any },
  predicate: (key: string) => boolean
) => {
  const keys = Object.keys(o);
  for (const key of keys) {
    let keyPredicateResult;
    if (typeof o[key] === "object" && o[key] !== null) {
      keyPredicateResult = traverseObjectKeys(o[key], predicate);
    } else {
      keyPredicateResult = predicate(key);
    }

    if (keyPredicateResult === false) {
      return false;
    }
  }

  return true;
};

export const traverseObjectSliceStr = (
  o: { [key: string]: any },
  maxLength: number
) => {
  const keys = Object.keys(o);
  for (const key of keys) {
    if (typeof o[key] === "object" && o[key] !== null) {
      o[key] = traverseObjectSliceStr(o[key], maxLength);
    } else if (typeof o[key] === "string") {
      o[key] = o[key].substr(0, maxLength);
    }
  }
  return o;
};
