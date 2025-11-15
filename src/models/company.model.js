import { DataTypes } from "sequelize";
import { dataBase } from "../database.js";

const Company = dataBase.define("company", {
  company_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  company_name: DataTypes.STRING,
  website: DataTypes.STRING,
  description: DataTypes.STRING
});

export default Company;
