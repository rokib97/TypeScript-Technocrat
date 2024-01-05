// Union Types
type FrontendDeveloper = "Junior Developer" | "Pro Frontend Developer";
type FullStackDeveloper = "Frontend Developer" | "Pro FullStack Developer";

type Developer = FrontendDeveloper | FullStackDeveloper;

const newDeveloper: FrontendDeveloper = "Pro Frontend Developer";

// Type for User
type BloodGroup = "O+" | "A+" | "AB+" | "B+";

type User = {
  name: string;
  email?: string;
  gender: "Male" | "Female";
  bloodGroup: BloodGroup;
};

const newUser: User = {
  name: "Rokib",
  gender: "Male",
  bloodGroup: "O+",
};

// Intersection Type
type Car = {
  brand: string;
  model: string;
  year: number;
};

type Driver = {
  name: string;
  age: number;
  licenseNumber: string;
};

type CarWithDriver = Car & Driver;

const carAndDriver: CarWithDriver = {
  brand: "Tesla",
  model: "S3 Pro",
  name: "John",
  year: 2022,
  age: 34,
  licenseNumber: "3434gwhessd",
};
