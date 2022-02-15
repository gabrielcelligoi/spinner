const characters = ['\r|   ', '\r/   ', '\r-   ', '\r|   ', '\r\\   ', '\r-   ', '\n']

const spinner2 = function(array) {
  for (let i = 0; i <= 6; i++) {
    setTimeout(() => {
      process.stdout.write(array[i]);
    }, i * 100 * 2)
  }
};

spinner2(characters);