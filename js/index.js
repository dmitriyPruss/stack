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
  
  const stack1 = new Stack(10);
  
  // stack1.push(1);
  // stack1.push(2);
  // stack1.push(2);
  // stack1.push(2);
  // stack1.push(2);
  // stack1.push(2);
  // stack1.push(2);
  // stack1.push(2);
  // stack1.push(2);
  // stack1.push(2);
  
  // console.log('stack1.pop() :>> ', stack1.pop());
  // console.log('stack1.peek :>> ', stack1.peek);
  // console.log('stack1.pop() :>> ', stack1.pop());
  // console.log('stack1.peek :>> ', stack1.peek);
  
  // Является ли строка правильной скобочной последовательностью
  
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
function isPalindrome() {
    const palindromeStack = new Stack();
    
    return function(str) {
        let noSpacesStr = '';
        for (const char of str) {
            if (char !== ' ') {
                noSpacesStr += char.toLowerCase();
            };
        };
    
        for(let i = 0; i < Math.ceil( noSpacesStr.length / 2 ); i++) {
            if ( !(noSpacesStr[i] === noSpacesStr[noSpacesStr.length - 1 - i]) ) {
                console.log('*******************************');
                console.log('palindromeStack :>> ', palindromeStack);
                return false;
            };
        };
    
        palindromeStack.push(str);

        console.log('*******************************');
        console.log('palindromeStack :>> ', palindromeStack);
    
        return true;
    };
};

const palindrome = isPalindrome();

// testing...

// console.log('isPalindrome("tenet"):>> ', palindrome('tenet'));
// console.log('isPalindrome("guest"):>> ', palindrome('guest'));
// console.log('palindrome(\'а роза упала на лапу Азора\'):>> ', palindrome('а роза упала на лапу Азора'));

