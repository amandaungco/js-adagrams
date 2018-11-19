const Adagrams = {
  scoreLetters: {
    A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1,
    J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1,
    S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10,
  },

  drawLetters() {

    const letterPool = [
      'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A','B', 'B',
      'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
      'F', 'F','G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
      'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M','N', 'N', 'N', 'N', 'N', 'N',
      'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O','P', 'P',
      'Q','R', 'R', 'R', 'R', 'R', 'R','S', 'S', 'S', 'S',
      'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U',
      'V', 'V','W', 'W','X',
      'Y', 'Y','Z'
    ];

    const playersHand = []
    for (let i = 0; i < 10; i++) {
      let j = Math.floor(Math.random() * letterPool.length);
      playersHand.push(letterPool[j])
      letterPool.splice(j,1);
    }

    return playersHand


  },

  usesAvailableLetters(word, playersHand) {
    let result = true
    word.split('').forEach(function(letter) {
      if (!playersHand.includes(letter)) {
        return result = false;
      }
      else
      { let j = playersHand.indexOf(letter)
        playersHand.splice(j,1);
      }
    });
    return result
  },
  // need to add bonus score points`
  scoreWord(word) {
    let totalScore = 0;
    if (word.length == 0) {
      return totalScore
    }
    else {
      word.toUpperCase().split('').forEach(letter =>
        totalScore += Adagrams.scoreLetters[letter]
      );
      if (word.length >= 7 && word.length < 11){
        totalScore += 8
      }
    }

    console.log([word, totalScore])
    return totalScore
  },

  highestScoreFrom(words) {
    const wordsToScores = []
    words.forEach(word => {
      let wordScore= {
        word: word,
        score: Adagrams.scoreWord(word)
      }
      wordsToScores.push(wordScore)
    }
  );

  wordsToScores.sort(function(a,b){
    return b.score - a.score;
  });

  let topScore = wordsToScores[0]['score']
  let winningWords = []
  let winner = undefined

  wordsToScores.forEach(wordScore => {
    if (wordScore['score'] == topScore){
      winningWords.push(wordScore)
    }
  });

  if (winningWords.length > 1) {
    winningWords.forEach(wordScore => {
      if (wordScore.word.length == 10 && winner == undefined ) {
        winner = wordScore
        return winner
      }
    })

    if (winner == undefined){
      winningWords.sort(function(a,b){
        return a.word.length - b.word.length
      })
      winner = winningWords[0]
    }
  }
  else {
    winner = wordsToScores[0]
  }

  // console.log(winner)
  return winner

}


};
//sort words in hash by score
//set max score to the first value
//check to see if any other words have the same score
// if there are more than 1 elements in the array then tie breaker
//loop through words and check to see if one has a length of 10 -- winner
//otherwise smallest word is winner







/* loop through letters in word array, loop through letters in hand
if the letters match, delete the letter from the letters in hand array
and continue to the next index
if they dont match return false
if it makes it through the whole loop, return true
*/

// Do not remove this line or your tests will break!
export default Adagrams;
