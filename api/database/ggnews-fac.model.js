const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
      "GGNEWSFAC",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        nTitle: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        nDate: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        nLink: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
};
