import perfectNumber from './perfectNumber.js';

function spectrumPerfectNumber(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    if (perfectNumber(i)) {
      result.push(i);
    }
  }
  return result;
}

export default spectrumPerfectNumber;
