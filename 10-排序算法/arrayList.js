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

  ArrayList.prototype.insertionSort = function () {
    var length = this.array.length;
    
    for (let i = 0; i < length; i++) {
      var temp = this.array[i];
      
      var j = i;
      while (this.array[j - 1] > temp && j > 0) {
        this.array[j] = this.array[j - 1];
        j--;
      }
      this.array[j] = temp;
    }
  }

  ArrayList.prototype.shellSort = function () {
    var length = this.array.length;
    
    var gap = Math.floor(length / 2);

    while(gap >= 1) {
      for (let i = gap; i < length; i++) {
        var temp = this.array[i];
        var j = i;
        while(this.array[j - gap] > temp && j > gap - 1) {
          this.array[j] = this.array[j - gap];
          j -= gap;
        }
        this.array[j] = temp;
      }

      gap = Math.floor(gap / 2);
    }
  }

  // 选择枢纽 找到中间的枢纽并移动到倒数第二个位置
  ArrayList.prototype.median = function (left, right) {
    // 1.求出中间的位置
    var center = Math.floor((left + right) / 2)

    // 2.判断并且进行交换
    if (this.array[left] > this.array[center]) {
        this.swap(left, center)
    }
    if (this.array[center] > this.array[right]) {
        this.swap(center, right)
    }
    if (this.array[left] > this.array[right]) {
        this.swap(left, right)
    }

    // 3.巧妙的操作: 将center移动到right - 1的位置.
    this.swap(center, right - 1)

    // 4.返回pivot
    return this.array[right - 1]
  }

  ArrayList.prototype.quickSort = function () {
    this.quick(0, this.array.length - 1)
  }

  ArrayList.prototype.quick = function (left, right) {
    // 0.递归结束条件
    if (left >= right) return

    // 1.获取枢纽
    var pivot = this.median(left, right)

    // 2.开始进行交换
    // 2.1.记录左边开始位置和右边开始位置
    var i = left
    var j = right - 1
    // 2.2.循环查找位置
    while (true) {
      while (this.array[++i] < pivot) { }
      while (this.array[--j] > pivot) { }
      if (i < j) {
          // 2.3.交换两个数值
        this.swap(i, j)
      } else {
        // 2.4.当i<j的时候(一定不会=, 看下面解释中的序号3), 停止循环因为两边已经找到了相同的位置
        break
      }
    }

    // 3.将枢纽放在正确的位置
    this.swap(i, right - 1)

    // 4.递归调用左边
    this.quick(left, i - 1)
    this.quick(i + 1, right)
  }
}
