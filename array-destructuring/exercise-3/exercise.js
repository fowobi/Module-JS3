let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
let totalCost = 0;

order.forEach(({ itemName, quantity, unitPrice }) => {
  const itemTotal = quantity * unitPrice;
  totalCost += itemTotal;
  console.log(`${itemName} x ${quantity} - $${itemTotal.toFixed(2)}`);
});

console.log(`Total cost: $${totalCost.toFixed(2)}`);