const pg = require ('pg');

const client = {
    user: "postgres",
    password: "key07202020",
    port: 5432,
    database: "class",
    max: 10,
    idleTimeoutMillis: 30000,
};

let pool = new pg.Pool(client);
pool.connect()
.then(() => console.log("Hy Joshua You are Successfully Connected to  Database class"))
.catch(error => console.log(error))
.finally(() => client.end);

export default pool;