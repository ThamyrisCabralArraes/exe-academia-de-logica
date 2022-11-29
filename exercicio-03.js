let inicial = 80;
let final = 150;
let count = 0;
let resultado2 = '';
let resultado3 = '';

for (let index = inicial; index <= final; index += 1) {
  if (index % 3 === 0) {
    count += 1;
  }
  if (count >= 50) {
    resultado2 = 'Há 50 ou mais números diviseis por 3';
  } else {
    resultado3 = 'Sequência muito pequena';
  }
}
console.log(count);
console.log(resultado2);
console.log(resultado3);
