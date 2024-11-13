

function sumArray(params: number[]): number {
        return params.reduce(
          (accumulator, initialValue) => accumulator + initialValue,
          0
        );
      }
    
      const result = sumArray([1, 2, 3, 5, 7]);
      console.log(result);




    
