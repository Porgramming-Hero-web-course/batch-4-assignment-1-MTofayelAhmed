{


    function removeDuplicates(arrayOfNumbers: number[]): number[] {
        const newArray: number[] = [];
    
        for (let i = 0; i < arrayOfNumbers.length; i++) {
          if (!newArray.includes(arrayOfNumbers[i])) {
            newArray.push(arrayOfNumbers[i]);
          }
        }
        return newArray;
      }
    
      const problem2Result = removeDuplicates([1, 23, 3, 45, 6, 6, 8, 4]);
      console.log(problem2Result);






}