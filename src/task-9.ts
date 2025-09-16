// Задача 9

// Завдання:

// 1. Створіть інтерфейс Container, що містить:

// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2.  Створіть два контейнери:

// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.

// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

// Примітка:

// Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T;
}

interface User {
  id: string;
  name: string;
  age: number;
}

const createContainer = <T>(initalValues: T[]): Container<T> => {
  const createdContainer: Container<T> = {
    items: initalValues,
    addItem(item) {
      this.items.push(item);
    },
    getItem(idx) {
      return this.items[idx];
    },
  };

  return createdContainer;
};

const numberContainer = createContainer<number>([1, 2, 3, 4, 5]);
const strigContainer = createContainer<string>(["test", "qwerty", "todo"]);
const userContainer = createContainer<User>([
  { id: "1", name: "Ivan", age: 37 },
]);

console.log(numberContainer, strigContainer, userContainer);
