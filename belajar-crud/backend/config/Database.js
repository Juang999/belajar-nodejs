import { Sequelize } from "sequelize";

const db = new Sequelize('crud_express','Hello666Sec', 'ProgrammerRaincity', {
    host: "localhost",
    dialect: "mysql",
});

export default db;