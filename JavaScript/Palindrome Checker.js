function palindrome(str) {
  let newStr = str.match(/[a-z0-9]+/ig).join("").toLowerCase()
  let revStr = newStr.split("").reverse().join("")
  return newStr === revStr
}