export function remove(array: any[], index: number) {
  const l: number = array.length;
  const arr = [];
  for (let i = 0; i < l; ++i) {
    if (i === index) {
      continue;
    }
    arr.push(array[i]);
  }
  return arr;
}
