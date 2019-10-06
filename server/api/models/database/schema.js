import pool from '../../config/connect_db';

const student_class = `CREATE schema tautorial;`;

const queryString = ` ${student_class} `;
pool.query(queryString)
.then(() => console.log("Hy Joshua You are Successfully Created schema"))
.catch(error => console.log(error));