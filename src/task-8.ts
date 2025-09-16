// Задача 8
// Завдання:

// 1. Створіть функцію getPermissions, яка приймає параметр role типу Role.

// 2. Функція має повертати масив рядків, які описують права доступу для кожної ролі:

// Admin має права: "create", "read", "update", "delete"
// User має права: "read", "update"
// Guest має лише право: "read"
// 3. Типізуйте параметр і тип повернення функції getPermissions.

// 4. Перевірте, що TypeScript не дозволяє передати в getPermissions значення, якого немає в Role.

// enum Role {
//   Admin,
//   User,
//   Guest,
// }
type Role = "Admin" | "User" | "Guest";

function getPermissions(role: Role): string[] {
  switch (role) {
    case "Admin":
      return ["create", "read", "update", "delete"];
    case "User":
      return ["read", "update"];
    case "Guest":
      return ["read"];
  }
}

// Виклики:
console.log(getPermissions("Admin")); // ["create", "read", "update", "delete"]
console.log(getPermissions("User")); // ["read", "update"]
console.log(getPermissions("Guest")); // ["read"]
