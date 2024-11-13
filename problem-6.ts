{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  interface PartialUpdates {
    name?: string;
    age?: number;
    email?: string;
  }

  function updateProfile(Obj: Profile, updates: PartialUpdates): Profile {
    return { ...Obj, ...updates };
  }

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
}
