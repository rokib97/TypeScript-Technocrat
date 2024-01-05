{
  // Destructuring In Typescript

  // Object Destructuring In TypeScript
  const user: {
    id: number;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    address: string;
    phone: string;
  } = {
    id: 1,
    name: {
      firstName: "Rokibul",
      middleName: "Hasan",
      lastName: "Rokib",
    },
    address: "mirpur",
    phone: "01613333333",
  };

  const {
    address,
    phone: contactNum,
    name: { firstName, lastName: lstName },
  } = user;

  //   array Destructuring

  const names: string[] = ["rokib", "shakib", "neela", "john", "ema"];
  const [first, , third, ...rest] = names;
  console.log(third); //neela
  console.log(rest); //["john", "ema"]

  //   function parameter

  function printFirstTwo([first, second]: string[]) {
    console.log(first, second);
  }
  printFirstTwo(names);

  const [name, age]: [string, number] = ["John", 30];
  console.log(name, age);
}
