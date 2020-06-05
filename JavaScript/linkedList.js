// linked list implementation

class listNode{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
    constructor(value){
        this.head = new listNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    add(newValue){
        let newCell = new listNode(newValue);
        this.tail.next = newCell;
        this.tail = newCell;
        this.length++;
    }
    prepend(newValue){
        let newCell = new listNode(newValue);
        newCell.next = this.head; 
        this.head = newCell;
        this.length++;
    }
    printList(){
      const array = [];
      let currentNode = this.head;
      while(currentNode != null){
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(array);
    }
    insert(index, newValue){
        let currentNode = this.head;
        if(index >= this.length){
            return this.add(newValue);
        }
        const newCell = new listNode(newValue);
        let front = this.traverseToIndex(index-1);
        const holdingPointer = front.next;
        front.next = newCell;
        newCell.next = holdingPointer;
        this.length++;
    }
    deleteNode(index){
      let holder1 = this.traverseToIndex(index-1);
      let node = this.traverseToIndex(index);
      console.log(`node: ${node.value}`);
      let holder2 = node.next;
      holder1.next = holder2;
      this.length--;
    }
    traverseToIndex(index){
        let count = 0;
        let currentNode = this.head;
        while( count != index ){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
}


let myList = new LinkedList(10);
myList.add(20);
myList.add(30);
myList.prepend(55);
myList.printList();
myList.insert(2, 890);
myList.printList();
myList.deleteNode(2);
myList.printList();
