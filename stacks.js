class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack) {
  return stack.top;
}

function isEmpty(stack) {
  if (!stack.top) {
    return true;
  } else {
    return false;
  }
}

function display(stack) {
  while (stack.top !== null) {
    console.log(stack.top.data);
    stack.top = stack.top.next;
  }
}

function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  let forwardStack = new Stack();
  for (let i=0; i<string.length; i++){
    forwardStack.push(string[i])
  }
  // console.log(forwardStack.top.data)
  let backwardStack = new Stack();
  for (let i=string.length; i>=0; i--){
    backwardStack.push(string[i])
  }
 
  for (let i=0; i < string.length; i++){
    if(forwardStack.pop() !== backwardStack.pop()) return false
  }
    return true;
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));


// (())
function checkMatching(expression) {
  let stack = new Stack();
  for(let i=0; i<expression.length; i++){
    if (expression[i] === '('){
      stack.push(expression[i])
    }
    if (expression[i] === ')'){
      if(isEmpty(stack)){
        console.log('missing "("')
        return false;
      }
      stack.pop()
    }
  }

  if(!isEmpty(stack)){
    console.log('missing ")"')
    return false;
  } else {
    return true;
  }
}
console.log(checkMatching('(())'))

function main() {
  const starTrek = new Stack();

  // 1
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');


  // //2
  // console.log(peek(starTrek));
  // console.log(isEmpty(starTrek));
  // display(starTrek);
  starTrek.pop();
  starTrek.pop();
  starTrek.push('Scotty');
  // display(starTrek);
}

main();
