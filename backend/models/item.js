import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define("Item", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name:  {
      type: DataTypes.STRING,
      allowNull: false,    // boa prática garantir que o nome seja obrigatório
    },
    price:  {
      type: DataTypes.FLOAT,
      allowNull: false,    // preço também obrigatório
      validate: {
        min: 0,            // preço não negativo
      },
    },
  }, {
    timestamps: false,
  });
};
