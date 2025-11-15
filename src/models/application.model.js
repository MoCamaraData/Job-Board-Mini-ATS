import { DataTypes } from "sequelize";
import { dataBase } from "../database.js";

const Application = dataBase.define("application", {
  application_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  resume: DataTypes.TEXT,
  cover_letter: DataTypes.TEXT,
  applied_at: DataTypes.DATE,
  id_job: DataTypes.INTEGER
});

export default Application;
