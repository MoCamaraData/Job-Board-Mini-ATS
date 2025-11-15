import { dataBase } from "../database.js";

import Company from "./company.model.js";
import User from "./user.model.js";
import Role from "./role.model.js";
import UserRole from "./userRole.model.js";
import Job from "./job.model.js";
import Category from "./category.model.js";
import JobCategory from "./jobCategory.model.js";
import Application from "./application.model.js";
import Stage from "./stage.model.js";
import ApplicationStage from "./applicationStage.model.js";
import Comment from "./comment.model.js";
import HasComment from "./hasComment.model.js";


/* ----------- ASSOCIATIONS ----------- */

// Company 1--N User
Company.hasMany(User, { foreignKey: "id_company" });
User.belongsTo(Company, { foreignKey: "id_company" });

// User N--N Role
User.belongsToMany(Role, { through: UserRole, foreignKey: "user_id", otherKey: "id_role" });
Role.belongsToMany(User, { through: UserRole, foreignKey: "id_role", otherKey: "user_id" });

// Company 1--N Job
Company.hasMany(Job, { foreignKey: "id_company" });
Job.belongsTo(Company, { foreignKey: "id_company" });

// Job N--N Category
Job.belongsToMany(Category, { through: JobCategory, foreignKey: "job_id" , otherKey: "id_category" });
Category.belongsToMany(Job, { through: JobCategory, foreignKey: "id_category", otherKey: "job_id" });

// Job 1--N Application
Job.hasMany(Application, { foreignKey: "id_job" });
Application.belongsTo(Job, { foreignKey: "id_job" });

// Application N--N Stage
Application.belongsToMany(Stage, { through: ApplicationStage, foreignKey: "application_id", otherKey: "stage_id" });
Stage.belongsToMany(Application, { through: ApplicationStage, foreignKey: "stage_id", otherKey: "application_id" });

// User 1--N Comment
User.hasMany(Comment, { foreignKey: "id_user" });
Comment.belongsTo(User, { foreignKey: "id_user" });

// Application N--N Comment
Application.belongsToMany(Comment, { through: HasComment, foreignKey: "application_id", otherKey: "id_comment" });
Comment.belongsToMany(Application, { through: HasComment, foreignKey: "id_comment", otherKey: "application_id" });

/* ----------- SYNCHRONISATION DB ----------- */
export const syncDatabase = async () => {
  try {
    await dataBase.sync({ alter: true });
    console.log(" Base synchronisée !");
  } catch (err) {
    console.error(" Erreur de synchronisation :", err);
  }
};

export {
  Company, User, Role, Job,
  Category, Application, Stage,
  Comment
};
