const Board = require('./board.model');

const getAll = async () => Board.find({});

const get = async id => Board.findById(id);

const create = async board => Board.create(board);

const update = async (id, board) => {
  await Board.updateOne({ _id: id }, board);
  return get(id);
};

const removeBoard = async id => Board.deleteOne({ _id: id });
// const removeBoard = async id => {
//       return (await Board.deleteOne({_id: id})).deletedCount;
//     }

module.exports = { getAll, get, create, update, removeBoard };
