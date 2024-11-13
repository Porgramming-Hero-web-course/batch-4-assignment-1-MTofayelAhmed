{
Question: The significance of union and intersection types in Typescript.
ans: Union types help us to contain multiple types in a variable . its give us flexibility . suppose , when we receive an input from user but we don,t know its type in those situations Union types gives us flexibility .

type USer = string | number | boolean | undefined

intersection types: it helps us to join separate types and make sure the new combines types has all the required types . it gives us more type safety by ensuring more rigid approach .

type infoName = {name:string}  ;
type infoAge = {age: number};
type person = infoName & infoAge;

const personINformation: person = {name:"Tofayel Ahmed", age: 32 }



}
