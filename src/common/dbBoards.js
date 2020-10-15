const DB = require('./db');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const dbBoards = DB.boards;
const board = new Board();
dbBoards.push(board);
DB.tasks.push(new Task({ boardId: board.id }), new Task({ boardId: board.id }));

const getAllBoard = async () => dbBoards.slice(0);
const getBoard = async id => dbBoards.find(el => el.id === id);
const createBoard = async newBoard => {
  dbBoards.push(newBoard);
  return newBoard;
};
const updateBoard = async (id, updatedBoard) => {
  const boardToUpdate = dbBoards.find(el => el.id === id);
  boardToUpdate.title = updatedBoard.title;
  boardToUpdate.columns = updatedBoard.columns;
  return boardToUpdate;
};
const removeBoard = async id => {
  const idxToRemove = dbBoards.findIndex(el => el.id === id);
  dbBoards.splice(idxToRemove, 1);
  return true;
};

module.exports = {
  getAllBoard,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard
};
