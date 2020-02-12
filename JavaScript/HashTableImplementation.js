class HashTable {
  constructor(size){
    this.data = Array(size);
  }

  _hashFn(hash, key, i){
    return (hash + key.charCodeAt(i) * i) % this.data.length;
  } 

  _hash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      hash = this._hashFn(hash, key, i);
    }
    return hash;
  }
  
  set(key, value){
    let hashedKey = this._hash(key);
    if(this.data[hashedKey] == undefined){
      this.data[hashedKey] = [value];
    }else{
      console.log('Collision');
      this.data[hashedKey].push(value);
    }
  }

  get(key){
    let hashedKey = this._hash(key);
    let found = this.data[hashedKey];
    if(this.data[hashedKey] == undefined){
      return 'not found';
    }
    return this.data[hashedKey];
  }
}

/** code for testing/using */
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 20);
myHashTable.get('grapes');
