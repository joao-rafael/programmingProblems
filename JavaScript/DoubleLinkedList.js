// linked list implementation

class listNode{
  constructor(value){
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList{
    constructor(value){
        this.head = new listNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    add(newValue){
        let newCell = new listNode(newValue);
        this.tail.next = newCell;
        newCell.previous = this.tail;
        this.tail = newCell;
        this.length++;
    }
    prepend(newValue){
        let newCell = new listNode(newValue);
        newCell.next = this.head; 
        this.head.previous = newCell;
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
        let lead = this.traverseToIndex(index-1);
        const follower = lead.next;
        lead.next = newCell;
        newCell.next = follower;
        newCell.previous = lead;
        follower.previous = newCell;
        console.log(this);
        this.length++;
    }
    deleteNode(index){
      let holder1 = this.traverseToIndex(index-1);
      let node = this.traverseToIndex(index);
      console.log(`node: ${node.value}`);
      let holder2 = node.next;
      holder2.previous = holder1;
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


let myList = new DoublyLinkedList(10);
myList.add(20);
myList.add(30);
myList.insert(2, 55);
myList.printList();
