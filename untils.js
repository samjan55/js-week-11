// Calculate the price after discount
export function calculateDiscount(price, discount) {
  return price - (price * discount / 100);
}

// Check if a person is an adult
export function isAdult(age) {
  return age >= 18;
}