const MAX = 50;
const MIN = 1;

const generateItems = (empty) => {
  const array = [];

  if (!empty) {
    let quantity = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

    while (quantity > 0) {
      quantity--;
      array.push({
        id: Math.random(),
        quantity: Math.floor(Math.random() * (MAX - MIN + 1) + MIN),
        price: Math.floor(Math.random() * (MAX - MIN + 1) + MIN) * 100,
      });
    }
  }

  return array;
};

const generateEmails = (empty) => {
  const array = [];

  if (!empty) {
    let quantity = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

    while (quantity > 0) {
      quantity--;
      array.push(`${Math.random().toString(36)}@stone.com.br`);
    }
  }

  return array;
};

const sumItems = (items) => {
  let sum = 0;

  items.forEach((item) => {
    sum = sum + item.quantity * item.price;
  });

  return sum;
};

const resolveTithe = (difference, array) => {
  let x = 0;

  while (difference > 0) {
    array[x][1]++;
    difference--;
    x++;
  }
};

const stoneChallenge = (items, emails) => {
  if (items.length === 0) {
    return "The list of items is empty!";
  } else if (emails.length === 0) {
    return "The list of emails is empty!";
  }

  const sum = sumItems(items);
  const value = Math.trunc(sum / emails.length);
  const array = [];

  emails.forEach(function (email) {
    array.push([email, value]);
  });

  const total = value * emails.length;

  let difference = sum - total;

  resolveTithe(difference, array);

  const myMap = new Map(array);

  return myMap;
};

const items = generateItems(false);
// const items = generateItems(true);
const emails = generateEmails(false);
// const emails = generateEmails(true);

console.table(stoneChallenge(items, emails));
