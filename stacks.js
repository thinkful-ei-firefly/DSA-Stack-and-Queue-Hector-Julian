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

function main() {
  const starTrek = new Stack();

  // 1
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  //2
  console.log(peek(starTrek));
  console.log(isEmpty(starTrek));
  display(starTrek);
}

main();
