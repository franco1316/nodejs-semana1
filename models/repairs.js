const { DataTypes } = require("sequelize");

const { db } = require("../utils/database");

const Repair = db.define("repair", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  date: {
    type: DataTypes.DATE,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "pending",
  },

  userId: {
    type: DataTypes.INTEGER,
  },
});

module.exports = { Repair };
