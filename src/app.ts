
import express from 'express';
import quotesRouter from './routing/quotes-routing';

import { dbConfig } from './common/config';
import { createConnection } from 'typeorm';

import bodyParser from 'body-parser';

class App {

    serverApp : express.Application;

    constructor(){
        this.serverApp = express();
        this.config();
        this.connectToDB();
        this.routing();
    }

    private config() {
        this.serverApp.use(bodyParser.json());
    }

    private routing(){
        this.serverApp.use("/quotes", quotesRouter);
    }

    private connectToDB(){
        createConnection(dbConfig).then(connection => {
            console.log('Successfully connected!');
        }).catch(err => {
            console.log("Error while connecting!");
            console.log(err);
        })
    }

}

let serverInstance = new App().serverApp; 
export default serverInstance;