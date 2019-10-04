

class _Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data, null, this.last);

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
    this.first.prev = null;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue){
  if(queue.first){
    return queue.first.value
  }else{
    return null
  }
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

console.log(starTrekQ.first)