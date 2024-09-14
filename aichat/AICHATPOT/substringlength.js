const input = "sun rises in the east.";

const words = input.split(" ");
for (let i = 0; i < words.length; i++) {
  if (words[i].length % 2 === 0) {
    console.log(words[i]);
  }
}