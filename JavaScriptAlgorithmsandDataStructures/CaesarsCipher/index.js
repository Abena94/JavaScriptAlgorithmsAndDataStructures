function rot13(str) {
    let decoded = "";
  
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
  
      // Only transform uppercase letters (Unicode 65 - 90)
      if (code >= 65 && code <= 90) {
        // Shift the Unicode value by 13, wrapping around at 90 (Z)
        code = (code - 65 + 13) % 26 + 65;
      }
  
      // Convert the Unicode value back into a string
      decoded += String.fromCharCode(code);
    }
  
    return decoded;
  }
  
  rot13("SERR PBQR PNZC");