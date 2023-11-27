import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from "body-parser";
import https from 'https'
import fs from 'fs'
import http from 'http'
import { sequelize } from './db/db.js';
import { Logger } from './models/logger.js';
import { loggerController } from './controllers/logger.js';

var privateKey  = fs.readFileSync('./selfsigned.key');
var certificate = fs.readFileSync('./selfsigned.crt');
var credentials = {key: privateKey, cert: certificate};


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
  
  app.get('/', (req,res)=>{
    res.send("Hello from express server.")
})
  

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

