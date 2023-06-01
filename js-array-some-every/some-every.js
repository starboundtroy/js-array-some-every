function hasOddNumber(arr) {
    return arr.some(num => num % 2 !== 0);
  }
  
  function hasAZero(num) {
    return num.toString().split('').includes('0');
  }
  
  function hasOnlyOddNumbers(arr) {
    return arr.every(num => num % 2 !== 0);
  }
  
  function hasNoDuplicates(arr) {
    return arr.length === new Set(arr).size;
  }
  
  function hasCertainKey(arr, key) {
    return arr.every(obj => key in obj);
  }
  
  function hasCertainValue(arr, key, searchValue) {
    return arr.every(obj => obj[key] === searchValue);
  }
  