// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.


function scrollingText(text) {
  let result = []
  for (let i = 0; i < text.length; i++) {
    result.push((text.slice(i) + text.slice(0, i)).toUpperCase())
  }
  return result
}
