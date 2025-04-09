// truyền mảng array, ...agrs chứa các đối số tự bỏ vào một object tương tự mảng
// tạo một biến chứa mảng mới (dành cho mảng mới sau khi đã remove đối số)
// dùng forEach lập qa với điệu kiện item trong mảng ko có trong args
// item nào thỏa điều kiện sẽ đc push vào mảng mới.
// return trả lại một mảng đã remove các item đối số

const removeFromArray = function (array, ...args) {
  let newArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.
// Hàm này thì dùng function array.filter -> validate xem thỏa điều kiện ko

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//

// Do not edit below this line
module.exports = removeFromArray;
