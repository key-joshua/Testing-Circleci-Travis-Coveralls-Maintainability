import classStuff from '../models/class'

const XController = {
  insert (req, res) {
    if (!req.body.Name || !req.body.Marks || !req.body.Level) {
      return res.status(400).send({'message': 'All fields are required'})
    }

    const datas = classStuff.create(req.body);
    if (datas) {
      return res.status(201).send({message : `Hy You added Successfully `, datas});
    }
    else{
      return res.status(400).send({message : `Hy something Wrong Occured `});
    }

  },
  retrieve (req, res) {
    const students = classStuff.findAll();
    return res.status(200).send({'message': 'student retrieved Successfully', students});
  },
  retrieveOne : (req, res) => {
    const student = classStuff.findOne( parseInt(req.params.id));

    if (!student) {
      return res.status(404).send({'message': 'student not found'});
    }
    return res.status(200).send({'message': 'student retrieved Successfully', student});
  },
  update : (req, res) => {
    const student = classStuff.findOne(parseInt(req.params.id));
    if (!student) {
      return res.status(404).send({'message': 'student not found'});
    }
    const updatedclassStuff = classStuff.update(parseInt(req.params.id), req.body)
    return res.status(200).send({'message': 'student updated Successfully',updatedclassStuff});
  },
  delete : (req, res) => {
    const student = classStuff.findOne(parseInt(req.params.id));
    if (!student) {
      return res.status(404).send({'message': 'student not found'});
    }
    const stud = classStuff.delete(parseInt(req.params.id));
    return res.status(204).send({'message': 'student deleted Successfully', Data:stud});
  }
}
export default XController;