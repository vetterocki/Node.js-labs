import express, {Express} from 'express';
import dotenv from 'dotenv';
import router from "./web/routes/router";
import bodyParser from "body-parser";
import dbConnectionConfig from "./config/db.connection.config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router)

const dbStarter = async () => {
    await dbConnectionConfig()
}

app.listen(port, async () => {
    console.log(`️Server starts on port: ${port}`);
    await dbStarter()
});
