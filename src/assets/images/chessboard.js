function generateChessboard() {
  const figures = ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'];
  const pawns = new Array(8).fill('Пешка');
  const emptyRows = new Array(8).fill(null);

  const table = [];
  table.push(figures.map((el) => `Ч ${el}`), pawns.map((el) => `Ч ${el}`), emptyRows, emptyRows, emptyRows, emptyRows, pawns.map((el) => `Б ${el}`), figures.map((el) => `Б ${el}`));
  console.log(table);
  return table;
}

function renderChessboard(table) {
  const emojis = {
    'Б Ферзь': '♕',
    'Б Король': '♔',
    'Б Слон': '♗',
    'Б Конь': '♘',
    'Б Ладья': '♖',
    'Б Пешка': '♙',
    'Ч Ферзь': '♛',
    'Ч Король': '♚',
    'Ч Слон': '♝',
    'Ч Конь': '♞',
    'Ч Ладья': '♜',
    'Ч Пешка': '♟',
    null: ' ',
  };

  return table.map((el) => el.map((elem) => emojis[elem])).map((el) => el.join('')).join('\n');
}
console.log(renderChessboard(generateChessboard()));
module.exports = { generateChessboard, renderChessboard };
