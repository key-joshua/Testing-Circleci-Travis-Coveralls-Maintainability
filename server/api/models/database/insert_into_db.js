import pool from '../../config/connect_db';


const student = `INSERT INTO tautorial.class( Student_Name, student_Marks, student_Level, createdDate, modifiedDate ) 
               VALUES( 'Key James', '70%', 'distenction', ' 2014-03-27', ' 2019-09-30' );`;    
               
const student1 = `INSERT INTO tautorial.class( Student_Name, student_Marks, student_Level, createdDate, modifiedDate ) 
               VALUES( 'Key John', '53%', 'pass', ' 2016-08-12', ' 2017-10-01' );`;    
               
                                  
const queryString = `${student1} ${student}`;

pool.query(queryString)
.then(() => console.log("Hy Joshua You are Successfully Inserted student "))
.catch(error => console.log(error));
