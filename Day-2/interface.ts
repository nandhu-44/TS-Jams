interface User {
  readonly _id: string;
  name: string;
  email: string;
}

interface Admin {
  readonly _id: string;
  name: string;
  email: string;
  adminKey: string;
  role(): string;
}

const getRole = () => {
  return "Admin";
};

const user: Admin = {
  _id: "123",
  name: "Mr. Admin",
  email: "admin@gmail.com",
  adminKey: "431245f4e",
  role: getRole,
};

console.log(user.role());

export {};
