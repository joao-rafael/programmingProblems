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
  
  inset(key, value){
    let hashedKey = this._hash(key);
    if(this.data[hashedKey] == undefined){
      this.data[hashedKey] = [];
      this.data[hashedKey].push([key, value]);
    }else{
      console.log('Collision');
      this.data[hashedKey].push([key, value]);
    }
  }

  get(key){
    let hashedKey = this._hash(key);
    let bucket = this.data[hashedKey];
    if(bucket){
      for(let i = 0; i < bucket.length; i++){
        if(bucket[i][0] === key){
          return bucket[i][1];
        }
      }
    }
    return 'not found'; 
  }
}

/** code for testing/using */
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 20);
myHashTable.get('grapes');
