

  (function () {
    function e(e) {
      if (void 0 === e) {
        e = 10;
      }

      this.nums = [];
      this.numsLen = 0;
      this.numSum = 0;
      this.maxNum = e;
    }

    e.prototype.push = function (e) {
      if (this.numsLen > this.maxNum) {
        this.numsLen--;
        this.numSum -= this.nums.shift();
      }

      this.nums.push(e);
      this.numSum += e;
      this.numsLen++;
    };

    e.prototype.getValue = function () {
      return this.numSum / this.numsLen;
    };

    e.prototype.clear = function () {
      this.nums.splice(0);
      this.numsLen = 0;
      this.numSum = 0;
    };
  })();

