class Array {
    /**
     * implementation of an array in JavaScript
     */
    constructor() {
        this.lenght = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    /**
     * Put an item on last index
     * O(1)
     */
    push(item) {
        this.data[this.lenght] = item;
        this.lenght++;
        return this.lenght;
    }

    /**
     * Deletes the last item
     * O(n)
     */
    pop() {
        const lastItem = this.data[this.lenght - 1];
        delete this.data[this.lenght - 1];
        this.lenght--;
        return lastItem;
    }

   /**
    * Shift items then pop
    * @param {int} index 
    */
    delete(index) {
        const deletedItem = this.data[index];
        this.shiftItems(index);
        this.pop();
        return deletedItem;
    }

    /**
     * Shift items from index until the last
     * data[i] = data[i+1];
     */
    shiftItems(index){
        for( let i = index; i < this.lenght - 1; i ++){
            this.data[i] = this.data[i+1];
        }
    }

}

const array1 = new Array();
array1.push('hello');
array1.push('world');
array1.push('!');
array1.delete(0);
console.log(array1);
