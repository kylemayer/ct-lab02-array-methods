export const filterMethod = (arr, callback) => {
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])){
      newArr = [...newArr, arr[i]];
    }
  }
  return newArr;
};
