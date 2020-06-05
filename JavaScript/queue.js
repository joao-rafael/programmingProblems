class Queue{
  constructor(item0){
    this.arr = [];
    this.first = item0;
    this.last = item0;
    this.arr.push(this.first);
  }
  enqueue(value){
    this.arr.push(value);
  }
  dequeue(){
    if(this.arr.length < 1){
      console.log('The queue is empty');
      return;
    }
    this.arr.shift();
  }
  print(){
    console.log(this.arr);
  }
  peek(){
   console.log(this.arr[0]);
  }
}

const main = () => {
  let fila = new Queue(1);
  fila.enqueue(2);
  fila.enqueue(3);
  fila.enqueue(4);
  console.log('fila: ');
  fila.print();
  fila.peek();
  fila.dequeue();
  fila.print();
}

main();
