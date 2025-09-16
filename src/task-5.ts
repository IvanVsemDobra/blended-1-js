// Задача 5
// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.

interface NewUser {
  name: string;
  age: number;
}
interface User extends NewUser {
  isAdmin: boolean;
}

function createUser({ name, age }: NewUser): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });
