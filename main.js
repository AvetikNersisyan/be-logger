import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from "body-parser";
import { sequelize } from './db/db.js';
import { Logger } from './models/logger.js';
import { loggerController } from './controllers/logger.js';


dotenv.config();
const app = express();
const port = process.env.PORT;


app.use(
    cors({
      origin: "*",
    })
  );

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


app.post('/logger', loggerController.saveLog)
app.get('/logger', loggerController.logs)


const synchronize = async () => {
    await sequelize.authenticate({});
    await sequelize.sync({ alter: true });
  
    // await sourceChat.sync({ force: true });
  };
  
  

console.log(port, 'port');
app.listen(port, (e) => {
    synchronize();
    console.log('errr', e);
})