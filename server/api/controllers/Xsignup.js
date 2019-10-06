import classStuff from '../models/class'

const XController = {
 async insert(req, res) {
    if (!req.body.Name || !req.body.Marks || !req.body.Level) {
      return res.status(400).send({'message': 'All fields are required'})
    }

    const datas = await classStuff.insert_into_DB(req.body);
    if (datas) {
      return res.status(201).send({message : `Hy You added Successfully This student `, datas});
    }
  },
 async retrieve(req, res) {
    const datas = await classStuff.findAll_into_DB()
    if (datas) {
      return res.status(200).send({message : `Hy You Successfully retrieved all student `, datas});
    }
  },
 async retrieveOne(req, res) {
    const datas = await classStuff.findOne_into_DB( parseInt(req.params.id));
    // console.log(datas[0].id);
    if (datas.length === 0) {
      return res.status(404).send({message: 'This student not found'});
    }
    return res.status(200).send({message: 'This student Successfully', datas});
  }, 
 async update(req, res) {
    const datas_id = await classStuff.findOne_into_DB( parseInt(req.params.id));
     if (datas_id.length === 0) {
       return res.status(404).send({message: 'This student not found'});
     }
    const retrieve_this_student = await classStuff.findOne_into_DB( parseInt(req.params.id));
    // console.log(retrieve_this_student);
    // console.log(retrieve_this_student[0].student_name);
    const data_to_insert = {
      Name:req.body.Name || retrieve_this_student[0].student_name, 
      Marks:req.body.Marks || retrieve_this_student[0].student_marks, 
      Level:req.body.Level || retrieve_this_student[0].student_level}
    const datas = await classStuff.update_into_DB(data_to_insert, parseInt(req.params.id));
    return res.status(200).send({message: 'This student updated Successfully', datas});
   },
 async delete(req, res) {
    const datas_id = await classStuff.findOne_into_DB( parseInt(req.params.id));
     if (datas_id.length === 0) {
       return res.status(404).send({message: 'This student not found'});
     }

    await classStuff.delete_into_DB( datas_id);
    return res.status(200).send({message: 'This student are Successfully deleted ', datas_id});
   }
}
export default XController;