// ternary | optional chaining | nullish coalesing

{
  const number: number = 15;
  // if (number >= 18) {
  //   console.log("adult");
  // } else {
  //   console.log("not adult enough");
  // }
  const isAdult: string = number >= 18 ? "Adult" : "not Adult";
  // console.log({ isAdult });

  // nullish coalescing operator
  // null | undefined => desicion
  const isAuthenticated = undefined || null;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    age: number;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: "string";
    };
  };

  const user: User = {
    name: "rokib",
    age: 25,
    address: {
      city: "Dhaka",
      road: "awesome road",
      presentAddress: "Dhaka Mirpur",
    },
  };
  console.log(user?.address?.permanentAddress ?? "No Permanent Address Found");
}
