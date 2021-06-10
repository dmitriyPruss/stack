'use strict';

class Node {
  constructor(data, next) {
    this._data = data;
    this._next = next;
  }
}
  
class Stack {
  constructor(maxSize = 30) {
    this._maxSize = maxSize;
    this._size = 0;
    this._top = null;
  }  
  /**
     *
     * @param {*} value
     */
   push(value) {
    if (this._size === this._maxSize) {
      throw new RangeError('Stack overflow');
    }
    this._top = new Node(value, this._top);
    this._size++;
  }
  pop() {
    if (!this.isEmpty) {
      const value = this._top._data;
      this._top = this._top._next;
      this._size--;
      return value;
    }
  }
  get peek() {
    return this._top?._data;
  }
  get isEmpty() {
    return this._size === 0;
  }
}

function checkBracketSequence(str) {
  const brackerStack = new Stack();
  for (const s of str) {
    if (s === '(') {
      brackerStack.push(s);
      continue;
    }
    if (s === ')') {
      if (brackerStack.isEmpty) {
        return false;
      }
      brackerStack.pop();
    }
  }
  return brackerStack.isEmpty;
};
  

// PALINDROME FUNCTION
/**
 * @param {string} str some string
 * @returns {boolean} is string a palindrome or not
 */
function isPalindrome(str) {
  const palindromeStack = new Stack();
  
  let noSpacesStr = '';

  for (const char of str) {
    if (char !== ' ') {
      noSpacesStr += char.toLowerCase();
    };
  };

  for(let i = 0; i < Math.ceil( noSpacesStr.length / 2 ); i++) {
    palindromeStack.push(noSpacesStr[i]);

    if ( palindromeStack.peek === noSpacesStr[noSpacesStr.length - 1 - i] ) {
      palindromeStack.pop();
    };
  };

  return palindromeStack.isEmpty;
};


// testing...

// console.log('isPalindrome("tenet"):>> ', isPalindrome('tenet'));
// console.log('isPalindrome("guest"):>> ', isPalindrome('guest'));
// console.log('palindrome(\'а роза упала на лапу Азора\'):>> ', isPalindrome('а роза упала на лапу Азора'));