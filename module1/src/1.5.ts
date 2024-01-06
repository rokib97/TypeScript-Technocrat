// Reference Type Object

const user: {
  readonly id: number;
  readonly company: "Programming Hero"; // type => literal type
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  id: 1,
  company: "Programming Hero",
  firstName: "rokibul",
  lastName: "rokib",
  isMarried: false,
};
// user.id = 12; // can't re assign
user.lastName; // accessing
