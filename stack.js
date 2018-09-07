class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class Stack{
  constructor(){
    this.head =  null;
    this.tail = null;
    this.size = 0;
  }
  add(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return newNode;
    }
    const prevNode = this.tail;
    prevNode.next = newNode;
    this.tail = newNode;
    this.tail.prev = prevNode;
    this.size++;
    return newNode;
  }
  remove(){
    if(!this.head) return undefined;
    if(this.size ===1){
      this.size = 0;
      this.head = null;
      this.tail = null;
      return this;
    }
    const poppedNode = this.tail;
    this.tail = poppedNode.prev;
    this.tail.next = null;
    poppedNode.prev = null;
    this.size--;
    return poppedNode;
  }
}

const stack = new Stack();





const state = {
  name:'sungmin yi',
  job:'junior developer'
}


const newState = {...state, job:'senior developer'}

stack.add(state);
stack.add(newState)

stack.remove();

console.log(stack)
