const sentence = "hello there from lighthouse labs";
const slowType = function(str) {
  let delay = 0;
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay - 50);
};
slowType(sentence);