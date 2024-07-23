const swap = (a, b) => {
  // Method 1: Using a temporary variable
  //   let temp = a;
  //   a = b;
  //   b = temp;

  // Method 2: without a temporary variable
  //   a = a + b;
  //   b = Math.abs(a - b);
  //   a = Math.abs(b - a);

  [b, a] = [a, b];
  console.log(a, b);
};
swap(30, 20);
