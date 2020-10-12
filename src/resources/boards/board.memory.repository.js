const dbBoards = require('../../common/dbBoards');

const getAll = async () => dbBoards.getAllBoard();

const get = async id => dbBoards.getBoard(id);

const create = async board => dbBoards.createBoard(board);

const update = async (id, board) => dbBoards.updateBoard(id, board);

const remove = async id => dbBoards.removeBoard(id);

module.exports = { getAll, get, create, update, remove };
