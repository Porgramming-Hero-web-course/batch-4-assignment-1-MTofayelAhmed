{


    function countWordOccurrences(param1: string, param2: string): number {
        const lowerCaseParam1 = param1.toLowerCase();
        const lowerCaseParam2 = param2.toLowerCase();
        const sentenceWords = lowerCaseParam1.split(" ");
        const similarWords = sentenceWords.filter(
          (word) => word === lowerCaseParam2
        );
        return similarWords.length;
      }
    
      const ProblemResult3 = countWordOccurrences(
        "I love typescript",
        "typescript"
      );
      console.log(ProblemResult3);









}