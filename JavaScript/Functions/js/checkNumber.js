function isNumber(value) {
  if (typeof value !== 'number' && isNaN(value)) {
    throw new Error('Invalid input');
  }
  return true
}

export default isNumber;
