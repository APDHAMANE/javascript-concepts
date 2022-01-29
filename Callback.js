/*
    Callback is a function passed as an argument to another function.
    Always remember that when you pass a function as an argument to another function, not to use parenthesis.
    Callbacks really useful in asynchronous functions where one function has to wait for another function's execution.
*/
Calculate = (a, b, Callback) => {
  let result = a + b;
  Callback(result);
};

DisplayResult = (result) => {
  console.log(result);
};

Calculate(10, 20, DisplayResult); //DisplayResult passed as an argument to Calculate function.
