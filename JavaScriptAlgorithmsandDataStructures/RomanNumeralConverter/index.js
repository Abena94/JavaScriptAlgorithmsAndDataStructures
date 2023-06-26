function convertToRoman(num) {
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
   let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 
   let romanNumeral = '';
 
   // Iterate through each Roman numeral
   for (let i = 0; i < values.length; i++) {
     // While the current value is less than or equal to num
     while (values[i] <= num) {
       // Add the Roman numeral and subtract its value from num
       romanNumeral += roman[i];
       num -= values[i];
     }
   }
   return romanNumeral;
 }
 
 convertToRoman(36);