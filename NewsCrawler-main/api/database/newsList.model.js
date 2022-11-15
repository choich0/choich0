const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "NewsData",
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
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      nLink: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'NewsData',
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          fields: [{ name: 'id' }],
        },
        {
          name: 'titleAndDateAndLink',
          unique: true,
          fields: [{ name: 'nTitle' }, { name: 'nDate' }, { name: 'nLink' }],
        },
      ],
      timestamps: false,
    }
  );
};