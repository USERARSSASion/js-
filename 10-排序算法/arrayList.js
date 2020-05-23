function ArrayList() {
  this.array = [];

  ArrayList.prototype.insert = function (item) {
    this.array.push(item)
  }

  ArrayList.prototype.toString = function () {
    return this.array.join();
  }

  ArrayList.prototype.swap = function (m, n) {
    var tem = this.array[m];
    this.array[m] = this.array[n];
    this.array[n] = tem;
  }

  ArrayList.prototype.bubbleSort = function () {
    var length = this.array.length;

    for (let j = length - 1; j >= 0; j--) {
      for (let i = 0; i < j; i++) {
        if (this.array[i] > this.array[i + 1]) {
          this.swap(i, i+1)
        }
      }
    }
  }

  ArrayList.prototype.selectionSort = function () {
    var length = this.array.length;
    
    for (let j = 0; j < length - 1; j++) {
      var min = j;
      for (let i = min + 1; i < length; i++) {
        if (this.array[min] > this.array[i]) {
          min = i;
        }        
      }
      this.swap(min, j);
    }
  }
}
