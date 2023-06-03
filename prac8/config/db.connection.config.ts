import {connection} from "./datasource.config";

export default async function dbConnectionConfig() {
    try {
        await connection
        console.log((await connection).options.entities)
    } catch (error) {
        console.log(`connection failed: \n ${error}`)
    }
}
