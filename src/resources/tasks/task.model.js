const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: String,
    order: Number,
    description: String,
    boardId: String,
    userId: String,
    columnId: String,
    _id: {
      type: String,
      default: uuid
    }
  },
  { versionKey: false }
);

taskSchema.static('toResponse', task => {
  const { id, title, order, description, boardId, userId, columnId } = task;
  return { id, title, order, description, boardId, userId, columnId };
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;
