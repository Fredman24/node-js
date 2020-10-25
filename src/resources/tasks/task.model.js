// const uuid = require('uuid');

// class Task {
//   constructor({
//     id = uuid(),
//     title = 'TASK',
//     order = 1,
//     description = 'task_description',
//     boardId,
//     userId = null,
//     columnId = null
//   } = {}) {
//     this.id = id;
//     this.title = title;
//     this.order = order;
//     this.description = description;
//     this.userId = userId;
//     this.boardId = boardId;
//     this.columnId = columnId;
//   }
// }

// module.exports = Task;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: String,
    order: Number,
    description: String,
    boardId: String,
    userId: String,
    columnId: String
  },
  { versionKey: false }
);

taskSchema.static('toResponse', task => {
  const { title, order, description, boardId, userId, columnId } = task;
  return { title, order, description, boardId, userId, columnId };
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;
