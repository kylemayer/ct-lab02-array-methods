export const findI = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
    if(callback === arr[i]) {
      return i;
    }
  }
};
