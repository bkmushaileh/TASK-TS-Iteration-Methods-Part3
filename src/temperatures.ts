/**
 * You can use these temperatures
 * to manually test your code
 */
const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

/**
 * `filterHighTemperatures` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns a new array containing temperatures greater than or equal to 25 degrees Celsius.
 * Example:
 *  filterHighTemperatures(temperatures); // => [25, 28, 30, 27, 29, 26, 28, 30, 27, 26, 25, 28, 29, 27, 26]
 */
function filterHighTemperatures(temps: number[]): number[] {
  // Your code here
  const highTemp = temps.filter((temp) => temp >= 25);

  return highTemp; // replace the empty array with what you see is fit
}
console.log(filterHighTemperatures(temperatures));
/**
 * `filterLowTemperatures` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns a new array containing temperatures less than 20 degrees Celsius.
 * Example:
 *  filterLowTemperatures(temperatures); // => [19, 18, 19, 19]
 */
function filterLowTemperatures(temps: number[]): number[] {
  // Your code here
  const lowTemp = temps.filter((temp) => temp < 20);

  return lowTemp; // replace the empty array with what you see is fit
}
console.log(filterLowTemperatures(temperatures));
/**
 * `convertCelsiusToFahrenheit` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Converts the entire list of temperatures to Fahrenheit using the formula (Celsius * 9/5) + 32.
 *  - Returns a new array containing temperatures in Fahrenheit.
 * Example:
 *  convertCelsiusToFahrenheit([25, 30, 20]); // => [77, 86, 68]
 */
function convertCelsiusToFahrenheit(temps: number[]): number[] {
  // Your code here
  const converted = temps.map((temp) => temp * (9 / 5) + 32);

  return converted; // replace the empty array with what you see is fit
}
console.log(convertCelsiusToFahrenheit(temperatures));
/**
 * `labelTemperatures` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns a new array labeling each temperature as:
 *    - "Warm" for temperatures >= 25
 *    - "Mild" for temperatures between 20 and 24
 *    - "Cool" for temperatures < 20
 * Example:
 *  labelTemperatures([25, 22, 18]); // => ["Warm", "Mild", "Cool"]
 */
type TemperatureLabel = "Warm" | "Mild" | "Cool";

function labelTemperatures(temps: number[]): TemperatureLabel[] {
  // Your code here
  let lebelTemp = temps.map((temp) => {
    let tempr: TemperatureLabel; // Either Warm, Mild or Cool nothing else.
    if (temp >= 25) {
      tempr = "Warm";
    } else if (temp >= 20 && temp <= 24) {
      tempr = "Mild";
    } else tempr = "Cool";
    return tempr;
    // map is returing a value tempr
  });
  return lebelTemp;
}
console.log(labelTemperatures([25, 22, 18]));
/**
 * `getMaxTemperature` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns the highest temperature recorded in the list.
 * Example:
 *  getMaxTemperature([25, 30, 20]); // => 30
 */
function getMaxTemperature(temps: number[]): number {
  // Your code here

  return -1; // replace -1 with what you see is fit
}

/**
 * `getMinTemperature` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns the lowest temperature recorded in the list.
 * Example:
 *  getMinTemperature([25, 30, 20]); // => 20
 */
function getMinTemperature(temps: number[]): number {
  // Your code here

  return -1; // replace -1 with what you see is fit
}

export {
  filterHighTemperatures,
  filterLowTemperatures,
  convertCelsiusToFahrenheit,
  labelTemperatures,
  getMaxTemperature,
  getMinTemperature,
};
