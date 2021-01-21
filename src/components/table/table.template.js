const codes = {
  A: 65,
  Z: 90,
};

function createCell() {
  return `<div class="table__row__cell"></div>`;
}

function createColumn(content) {
  return `
        <div class="table__column">${content}</div>
    `;
}

function createRow(index, content= '') {
  return `
        <div class="table__row">
            <div class="table__row__info">
                ${index ? index : ''}
            </div>
            <div class="table__row__data">
                ${content}
            </div>
        </div>
    `;
}

function toChar(_, index) {
  return String.fromCharCode(codes.A + index + 1)
}

export function tableTemplate(rowsCount = 15) {
  const columnsCount = codes.Z - codes.A;
  const table = [];

  const columns = new Array(columnsCount)
      .fill("")
      .map(toChar)
      .map(createColumn)
      .join('');

  const row = new Array(columnsCount)
      .fill("")
      .map(createCell)
      .join('')

  table.push(createRow(null, columns));
  for (let i = 0; i <= rowsCount; i++) {
    table.push(createRow(i + 1, row))
  }
  return table.join("");
}
