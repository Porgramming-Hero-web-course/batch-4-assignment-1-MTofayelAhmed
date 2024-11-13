{



    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
        for (const key of keys) {
          if (!(key in obj)) 
            return false;
        }
        return true;
      }
      
      const resultPerson = { name: "Alice", age: 25, email: "alice@example.com" };
      console.log(validateKeys(resultPerson, ["name", "age"]));
      




}