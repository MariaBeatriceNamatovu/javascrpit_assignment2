function factorial(num){
    if (num === 0 || num === 1){
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  
  let x = 5;
  let result = console.log(factorial(x));