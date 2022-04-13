const products = [
  { name: "gold starr", price: 30 },
  { name: "mushroom", price: 50 },
  { name: "green shells", price: 10 },
  { name: "banana skin", price: 5 },
  { name: "red shells", price: 40 },
];

// const filtered = products.filter((product) => product.price > 20);
// const promos = filtered.map((product) => {
//   return `The ${product.name} is ${product.price / 2} pounds today.`;
// });

const promos = products
  .filter((product) => product.price > 20)
  .map(
    (product) => `The ${product.name} is ${product.price / 2} pounds today.`
  );
console.log(promos);
