import { ConnectionOptions } from 'typeorm';
import path from 'path';

export const dbConfig : ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306, 
    username: 'root', 
    password: '',
    database: 'quotes_database',
    entities: [
        path.join(__dirname, "./../models/*.ts")
    ]
}

