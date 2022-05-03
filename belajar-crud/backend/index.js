import express from "express";
import db from "./config/Database.js";
import router from "./router/index.js";
const app = express();

try {
    await db.authenticate();
    console.log('database connected!');
} catch (error) {
    console.error(error);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(router);

app.listen(5000, () => {
    console.log('server running at port (localhost:5000)');
});  