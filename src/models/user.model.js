import { DataTypes } from "sequelize";
import { dataBase } from "../database.js";

const User = dataBase.define("user", {
  user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  first_name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  status: DataTypes.STRING,
  id_company: DataTypes.INTEGER
});

export default User;
