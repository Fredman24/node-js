const DB = {
  users: [],
  boards: [],
  tasks: []
};

module.exports = DB;

// const TABLES = {
//   USERS: 'users',
//   BOARDS: 'boards',
//   TASKS: 'tasks'
// }

// const DB = {
//   [TABLES.USERS]: [],
//   [TABLES.BOARDS]: [],
//   [TABLES.TASKS]: []
// };

// const deepCopy = obj => JSON.parse(JSON.stringify(obj));

// const getAll = async table => deepCopy(DB[table]);
// error handler надо вешать в последнюю очередь
// app.use(logError);
