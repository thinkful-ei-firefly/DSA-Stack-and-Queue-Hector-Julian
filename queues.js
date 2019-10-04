class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {
  return queue.first;
}

function isEmpty(queue) {
  if (!queue.first) {
    return true;
  } else {
    return false;
  }
}

function display(queue) {
  while (queue.first !== null) {
    console.log(queue.first.value);
    queue.first = queue.first.next;
  }
}

function main() {}

starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

// console.log(peek(starTrekQ));
// console.log(isEmpty(starTrekQ));
// display(starTrekQ);

starTrekQ.dequeue();
starTrekQ.dequeue();
starTrekQ.enqueue('Kirk');
display(starTrekQ);

main();
