{

    function getProperty<O, K extends keyof O>(Obj: O, PropertyName: K): O[K] {
        return Obj[PropertyName];
      }
    
      const person = { name: "Alice", age: 30 };
      console.log(getProperty(person, "name"));










}