function palindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Reverse the cleaned string
    let reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the cleaned string is a palindrome
    return cleanStr === reversedStr;
  }
  
  palindrome("eye");
  
  rot13("SERR PBQR PNZC");