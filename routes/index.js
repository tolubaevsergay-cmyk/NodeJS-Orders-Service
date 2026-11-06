const db = require('mongoose');
db.connect("mongodb://localhost:27017/orders")
  .then(() => console.log('MongoDB подключена'))
  .catch(err => console.error('Ошибка подключения:', err));

module.exports = db;
