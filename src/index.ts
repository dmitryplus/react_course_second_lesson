export const testTs = (a: number, b: number): number => a + b;

const result: number = 1;

const getResult = () => {
  if (result) {
    /* comment */
    return result;
  }
};

console.log('ok - ' + testTs(5, 3));
