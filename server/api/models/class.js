import pool from '../config/connect_db';
class studentClass {
  
  constructor() {
    this.class = [];
  }
 async insert_into_DB(new_student){
    const { Name, Marks, Level} = new_student;
    const text = `INSERT INTO tautorial.class( Student_Name, student_Marks, student_Level, createdDate, modifiedDate ) VALUES($1, $2, $3, $4, $5) returning *`;
    const values = [Name, Marks, Level, new Date(),  new Date() ];
    const { rows } = await pool.query(text, values);
    return rows;
  }

 async findOne_into_DB(id){
    const text = `SELECT * FROM tautorial.class WHERE id = $1`;
    const values = [id];
    const { rows } = await pool.query(text, values);
    return rows;
  }
 async findAll_into_DB(){
    const retrieve = `SELECT * FROM tautorial.class`;
    const { rows } = await pool.query(retrieve);
    return rows;
  }
 async update_into_DB(new_student, id){
    const { Name, Marks, Level} = new_student;
    const text = `UPDATE tautorial.class SET Student_Name=$1, student_Marks=$2, student_Level=$3, modifiedDate=$4 WHERE id = $5 returning*`;
    const values = [ Name, Marks, Level, new Date(), id ];
    const { rows } = await pool.query(text, values);
    return rows;
  }
async delete_into_DB(id){
    const text = `delete FROM tautorial.class WHERE id=$1 returning*`;
    const values = [id];
    const { rows } = await pool.query(text, values);
    return rows;
  }
}
export default new studentClass();