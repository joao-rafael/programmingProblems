class Stack{
  constructor(item0){
    this.arr = [];
    this.top = item0;
    this.bottom = item0;
    this.arr.push(this.top);
  }
  getTop = () => {
    return this.top;
  }
  getBottom = () => {
    return this.bottom;
  }
  add = (item) => {
    this.arr.push(item);
    this.top = item;
  }
  remove = () => {
    if(this.arr.length >= 1){
      this.arr.pop();
      this.top = this.arr[this.arr.length-1];
    }else{
      console.log(`This stack is empty.`);
    }
  }
  print = () => {
    this.arr.map(elem => console.log(elem));
  }
}

const main = () => {
  let pilha = new Stack(1);
  pilha.add(2);
  pilha.add(3);
  pilha.add(10);
  pilha.remove();
  console.log(`top: ${pilha.getTop()}`);
  pilha.print();
}

main();
