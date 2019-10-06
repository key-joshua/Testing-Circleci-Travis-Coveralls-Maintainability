import pool from '../../config/connect_db';

const usersTable = 'DROP TABLE IF EXISTS andela.users';
const reflectionTable = 'DROP TABLE IF EXISTS tautorial.reflection';
const queryString = `${reflectionTable}`;
pool.query(queryString)
.then(() => console.log("Hy Joshua You are Successfully Dropped Table andela.users  "))
.catch(error => console.log(error));