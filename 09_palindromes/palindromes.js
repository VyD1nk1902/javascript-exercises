const palindromes = function (word) {
  //   const string = word.replace(/[ ,!.]/g, ""); // global scope thay thế tất cả cá dâu bên trong /[]/ thành , ""
  //   const newString = string.toLowerCase();
  //   const splitString = newString.split("");
  //   const reverseString = splitString.reverse().join("");
  const wordFilter = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanWord = word
    .toLowerCase()
    .split("")
    .filter((character) => wordFilter.includes(character))
    .join("");
  const reversedString = cleanWord.split("").reverse().join("");
  return cleanWord === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
