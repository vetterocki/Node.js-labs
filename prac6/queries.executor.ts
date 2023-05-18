import * as fs from 'fs';
import {Client} from "pg";

export class QueriesExecutor {
    private client: Client;
    constructor(client) {
        this.client = client;
    }

    async executeAllSqlFiles(directoryPath) {
        try {
            const files = fs.readdirSync(directoryPath);

            for (const file of files) {
                const sql = fs.readFileSync(directoryPath + file, 'utf-8');
                const result = await this.client.query(sql);
                console.log(`Successfully executed ${file}. Result:`, result.rows);
            }
        } catch (error) {
            console.error('Error executing SQL scripts:', error);
        }
    }
}


