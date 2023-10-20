/** product: calculate the product of an array of numbers. */

function product(nums, currentIndex = 0) {
  if (currentIndex === nums.length) return 1;
  return nums[currentIndex] * product(nums, currentIndex + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, currentIndex = 0, longestSoFar = 0) {
  if (currentIndex === words.length) return longestSoFar;
  longestSoFar = Math.max(words[currentIndex].length, longestSoFar);
  return longest(words, currentIndex + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, currentIndex = 0, newStr = "") {
  if (currentIndex >= str.length) return newStr;
  newStr += str[currentIndex];
  return everyOther(str, currentIndex + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, currentIndex = 0) {
  let leftcurrentIndex = currentIndex;
  let rightcurrentIndex = str.length - currentIndex - 1;
  if (leftcurrentIndex >= rightcurrentIndex) return true;
  if (str[leftcurrentIndex] !== str[rightcurrentIndex]) return false;
  return isPalindrome(str, currentIndex + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, currentIndex = 0) {
  if (currentIndex === arr.length) return -1;
  if (arr[currentIndex] === val) return currentIndex;
  return findIndex(arr, val, currentIndex + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, currentIndex = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - currentIndex];
  return revString(str, currentIndex + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object")
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
