export const everyMethod = (arr, callback) => {

  for(let i = 0; i < arr.length; i++) {
    if(!callback(arr[i]) === 0)
      return false;
  }
  return true;
};
