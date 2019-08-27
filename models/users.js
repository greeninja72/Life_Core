"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      pid: {
        type: DataTypes.STRING(12),
        allowNull: false,
        unique: true,
        comment: "product id"
      },
      language: {
        type: DataTypes.STRING(3),
        allowNull: false,
        defaultValue: "KOR",
        comment: "language"
      },
      water: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: "today's drinking amount of water"
      },
      filter: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: "remaining filter"
      },
      notify: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: "silver care"
      }
    },
    {
      timestamps: true,
      paranoid: true
    }
  );
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
