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

// function main() {}

// starTrekQ = new Queue();
// starTrekQ.enqueue('Kirk');
// starTrekQ.enqueue('Spock');
// starTrekQ.enqueue('Uhura');
// starTrekQ.enqueue('Sulu');
// starTrekQ.enqueue('Checkov');

// // console.log(peek(starTrekQ));
// // console.log(isEmpty(starTrekQ));
// // display(starTrekQ);

// starTrekQ.dequeue();
// starTrekQ.dequeue();
// starTrekQ.enqueue('Kirk');
// display(starTrekQ);

// main();

//square dance pairing
// go through list of people separating F's from M's 
// if next person does not have an opposite pair send to spare queue
// three queues




  let mQueue = new Queue;
  let fQueue = new Queue;

  function queueDancer(gender, name) {

    let person = name;
    if (gender === 'F') fQueue.enqueue(person);
    if (gender === 'M') mQueue.enqueue(person);
    if(fQueue.first && mQueue.first) {
      let fDancer = fQueue.dequeue();
      let mDancer = mQueue.dequeue();
      console.log(`Female dancer is ${fDancer}, and the male dancer is ${mDancer}`)
    }

    if (fQueue.first) {
      let people = 1;
      let lastPerson = fQueue.first;

      while(lastPerson.next !== null) {
        people ++;
        lastPerson = lastPerson.next;
      }
      console.log(`There are ${people} female dancers waiting to dance.`);
    }

    if (mQueue.first) {
      let people = 1;
      let lastPerson = mQueue.first;

      while(lastPerson.next !== null) {
        people ++;
        lastPerson = lastPerson.next;
      }
      console.log(`There are ${people} male dancers waiting to dance.`);
    }
  }


  // const danceQueue = new Queue;

queueDancer('F', 'Jane');
queueDancer('M', 'Frank');
queueDancer('M', 'John');
queueDancer('M', 'Sherlock');
queueDancer('F', 'Madonna');
queueDancer('M', 'David');
queueDancer('M', 'Christopher');
queueDancer('F', 'Beyonce');
  
  // queueDancer(danceQueue)  
  // const danceQueue = new Queue;

  // danceQueue.enqueue('F', 'Jane');
  // danceQueue.enqueue('M', 'Frank');
  // danceQueue.enqueue('M', 'John');
  // danceQueue.enqueue('M', 'Sherlock');
  // danceQueue.enqueue('F', 'Madonna');
  // danceQueue.enqueue('M', 'David');
  // danceQueue.enqueue('M', 'Christopher');
  // danceQueue.enqueue('F', 'Beyonce');
  
  // queueDancer(danceQueue)  