//  level(2)

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
  
};
const sum = fibonacci_series(8).reduce((a,b)=>a+b)
 console.log(sum);


