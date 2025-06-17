import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define("Purchase", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Items",
        key: "id",
      },
      onDelete: "CASCADE",      
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      validate: {
        min: 1, // quantidade mínima 1
      },      
    },
  }, {
    timestamps: false,
  });
};
