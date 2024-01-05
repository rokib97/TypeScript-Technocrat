// spread and rest operator
// Array
const bros1: string[] = ["saki", "sakib", "mir", "linkon"];
const bros2: string[] = ["shahriyar", "hasib", "jashim", "shakib"];
const mergedBros: string[] = [...bros1, ...bros2];

// Object
const userOne: { name: string; age: number; job: string } = {
  name: "Rokib",
  age: 25,
  job: "Developer",
};
const userTwo: { name: string; age: number; job: string } = {
  name: "Akhi",
  age: 22,
  job: "Developer",
};

const userList: { name: string; age: number; job: string } = {
  ...userOne,
  ...userTwo,
};

// Rest Operator
const greetFriend = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Hello ${friend}`);
  });
};

greetFriend("Rokib", "Akhi", "Sarmin", "neela");
