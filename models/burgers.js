
let orm = require("../config/orm.js");

let burger = {
  all: function(callback) {
    orm.all("burger", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callback) {
    orm.create("burger", cols, vals, function(res) {
      callback(res);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.update("burger", objColVals, condition, function(res) {
      callback(res);
    });
  },
  delete: function(condition, callback) {
    orm.delete("burger", condition, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;