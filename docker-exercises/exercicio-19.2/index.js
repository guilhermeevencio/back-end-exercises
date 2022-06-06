function stringAnagram(dictionary, query) {
  // Write your code here
  let finalAnswer = [];
  query.map((word) => {
      let count = 0;
      const splitted = word.split('');
      const sorted = splitted.sort();
      const joined = sorted.join('');
      dictionary.forEach((dicWord) => {
          const dicSplitted = dicWord.split('');
          const dicSorted = dicSplitted.sort();
          const dicJoined = dicSorted.join('');
          if (dicJoined === joined) {
              count += 1;
          }
      });
      if (count !== 0) { finalAnswer.push(count); };
    })
    console.log(finalAnswer);
}

stringAnagram(['hack', 'a', 'rank', 'khac', 'ackh', 'kran',
'rankhacker', 'a', 'ab', 'ba', 'stairs', 'raits'], ["a", "nark", "bs", "hack", "stair"]);