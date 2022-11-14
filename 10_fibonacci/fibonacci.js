const fibonacci = num => {
    if (num<0){
        return "OOPS";
    }
    const arr = [0,1];
    
    const fib = n => {
        if (n <= 1) {
            arr.push(n);
          return n;
        }
         
        let a = 0, b = 1, c = 1, count = 0;
        
        while (count < n) {
          c = a + b;
          a = b;
          b = c;
          count++;
          arr.push(c);
        }
      };
    
      fib(num);
    
      return arr[num];
    }

// Do not edit below this line
module.exports = fibonacci;
