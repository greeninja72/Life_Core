module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      pid: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        comment: "Product ID"
      },
      water: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: "Water Size"
      },
      notify: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        comment: ""
      }
    },
    {
      timestamps: true,
      paranoid: true
    }
  );
};
