// The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).
// If the score < 0, return 0.

function checkExam (array1, array2) {
    var count = 0; 
    array1.forEach(function(letter, index){
      if (letter == array2[index]){
        count += 4; 
      }
      else if (letter != array2[index] && array2[index] != ""){
        count--;
      }
    })
  return count < 0 ? 0 : count;
  }