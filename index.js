//double linkedList


class Node{
  constructor(val){
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

class DoubleLink{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    const poppedNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift(){
    if(!this.head) return undefined;
    const shiftedNode = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }
  unshift(val){
    const newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }
  get(index){
    const half = Math.floor(this.length /2)
    if(!this.head || index < 0 || index > this.length) return null;
    if(index === 0) return this.head;
    if(index === this.length - 1) return this.tail
    if(index > half){
      const recurse = (count, head) => {
        if(index === count) return head;
        return recurse(count +  1, head.next)
      }

      return recurse( 0 ,this.head);
    }
    if(index <= half){
      const recurse = (count, tail) => {
        if(index === count) return tail;
        return recurse(count - 1, tail.prev)
      }

      return recurse( this.length - 1,this.tail);
    }
  }
  set(index,val){
    const currentNode = this.get(index)
    if(!currentNode) return undefined;
    currentNode.val = val;
    return currentNode
  }
  insert(index,val){
    if(index < 0 || index > this.length) return undefined;
    if(index === this.length) return this.push(val)
    if(index === 0) return this.unshift(val);
    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.perv = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return newNode;
  }
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    const poppedNode = this.get(index);
    const beforeNode = poppedNode.prev;
    const afterNode = poppedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    poppedNode.prev = null;
    poppedNode.next = null;
    this.length--;
    return poppedNode;
  }
}








const a = new DoubleLink();
a.unshift(4)
a.unshift(5)
a.unshift(6)
a.unshift(7)
a.unshift(8)
a.unshift(9)
a.remove(2)
console.log(a)



class Stack{
  constructor(){
    this._db = [];
  }
  add(val){
    this._db.push(val);
  }
  remove(){
    this._db.pop();
  }
  get getStack(){
    return this._db;
  }
}


const newStack = new Stack();

newStack.add(5);
newStack.add(6);
newStack.remove();

console.log(newStack.getStack)
