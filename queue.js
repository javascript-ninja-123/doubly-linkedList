
///naive approach

const q = [];


q.push('first')
q.push('second')
q.push('third')

q.shift()

// console.log(q)
//
//
//

class Node{
  constructor(val){
    this.val  = val;
    this.next = null;
  }
}


class Q{
  constructor(){
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  get getSize(){
    return this.size;
  }
  add(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return this;
    }
    const prevNode = this.tail;
    prevNode.next = newNode;
    this.tail = newNode;
    this.size++;
    return newNode;
  }
  remove(){
    if(!this.head){
      this.size = 0;
      this.head = null;
      this.tail = null;
      return this;
    }
    const head= this.head;
    const newHead = head.next;
    head.next = null;
    this.head = newHead;
    this.size--;
    return head;
  }
}




const qa = new Q();

qa.add(5)
qa.add(6)
qa.add(7)
const a = qa.remove();
console.log(a)

console.log(qa)
