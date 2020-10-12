const uuid = require('uuid');

class Board {
  constructor({
    id = uuid(),
    title = 'NEW_BOARD',
    columns = [
      {
        title: 'Column 1',
        order: 1
      },
      {
        title: 'Column 2',
        order: 2
      }
    ]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
