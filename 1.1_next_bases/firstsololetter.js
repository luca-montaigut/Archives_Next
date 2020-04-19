function firstSoloLetter(string) {
  for (var i = 0; i < string.length; i++) {
    copy = string.split("")
    copy.splice(i,1)
    if (!copy.includes(string.split("")[i])) {
      return string.split("")[i]
      break;
    }
  }
  return null
}


console.log(firstSoloLetter("aafbcbecf"))
console.log(firstSoloLetter("abcdefgh"))
console.log(firstSoloLetter("raddar"))