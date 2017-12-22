

const v1 = "This is V1";

const anagrams = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str.split('').reduce((acc, letter, i) =>
    acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
};
const difference = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x)); }

const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
// countOccurrences([1,1,2,1,2,3], 1) -> 3
const arrayMax = arr => Math.max(...arr);
const head = arr => arr[0];


const initializeArrayRange = (end, start = 0) =>
  Array.apply(null, Array(end - start)).map((v, i) => i + start);
//initializeArrayRange(5) -> [0,1,2,3,4]
const initializeArray = (n, value = 0) => Array(n).fill(value);

const timeTaken = callback => {
  const t0 = performance.now(), r = callback();
  console.log(performance.now() - t0);
  return r;
};
// timeTaken(() => Math.pow(2, 10)) -> 1024 (0.010000000009313226 logged in console)

console.log(1);