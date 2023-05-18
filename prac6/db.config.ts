import {Client} from 'pg';
import {data} from "./connection.data";
import {QueriesExecutor} from './queries.executor'


const config = {
    user: data.user,
    password: data.password,
    host: data.host,
    port: data.port,
    database: data.database
};


const client = new Client(config);
const executor = new QueriesExecutor(client);

client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
        executor.executeAllSqlFiles("queries/")
            .then(() => {
                console.log('All SQL files executed successfully.');
            })
            .catch((error) => {
                console.error('Error executing SQL files:', error);
            });

    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL database', err);
    });
