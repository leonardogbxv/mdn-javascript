// mapeia o array e retorna um novo array de acordo com o callback
const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);