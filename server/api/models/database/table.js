import pool from '../../config/connect_db';

const student_class = `
DROP TABLE IF EXISTS sessions CASCADE;
CREATE TABLE tautorial.class(
    id SERIAL PRIMARY KEY,
    Student_Name VARCHAR(128) NOT NULL,
    student_Marks VARCHAR(128) NOT NULL,
    student_Level VARCHAR(128) NOT NULL,
    createdDate VARCHAR(128) NOT NULL,
    modifiedDate VARCHAR(128) NOT NULL
  );`;

const queryString = ` ${student_class} `;
pool.query(queryString)
.then(() => console.log("Hy Joshua You are Successfully Created Table users  "))
.catch(error => console.log(error));