// Type Alias
{
  type Student = {
    name: string;
    age: number;
    job: string;
    isSingle: boolean;
    constact?: string;
  };

  const userOne: Student = {
    name: "rokib",
    age: 24,
    job: "web developer",
    isSingle: false,
    constact: "016666666666",
  };
  const userTwo: Student = {
    name: "askhi",
    age: 22,
    job: "web developer",
    isSingle: false,
  };

  //   string
  type UserName = string;
  type IsMarried = boolean;
  const userName: UserName = "rokib";
  const isMarried: IsMarried = false;

  //   function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
