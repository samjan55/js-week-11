// Calculate the price after discount
export function calculateDiscount(price, discount) {
  return price - (price * discount / 100);
}

// Check if a person is an adult
export function isAdult(age) {
  return age >= 18;
}
// Convert Celsius to Fahrenheit
export function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Calculate the average of two numbers
export function calculateAverage(num1, num2) {
  return (num1 + num2) / 2;
}