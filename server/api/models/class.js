class studentClass {
  
  constructor() {
    this.class = [
      {
        id: 1,
        student_name: "Teddy",
        student_marks: "50%",
        student_level: "Pass",
        createdDate: "2019-10-06T13:28:08.252Z",
        modifiedDate: "2019-10-06T13:28:08.252Z"
      },
      {
        id: 2,
        student_name: "Joshua",
        student_marks: "80%",
        student_level: "distenction",
        createdDate: "2013-17-06T02:31:35.252Z",
        modifiedDate: "2016-12-06T11:03:58.252Z"
      }

    ];
  }
create(data) {
    const newStudent = {
      id: this.class.length + 1,
      student_name: data.Name,
      student_marks: data.Marks ,
      student_level: data.Level,
      createdDate: new Date(),
      modifiedDate: new Date()
    };
    this.class.push(newStudent);
    return newStudent
  }
findOne(id) {
    return this.class.find(student => student.id === id);
  }
findAll() {
    return this.class;
  }
 update(id, data) {
    const retrieves = this.findOne(id);
    const index = this.class.indexOf(retrieves);
    this.class[index].student_name = data['Name'] || retrieves.student_name;
    this.class[index].student_marks = data['Marks'] || retrieves.student_marks;
    this.class[index].student_level = data['Level'] || retrieves.student_level;
    this.class[index].modifiedDate = new Date()
    return this.class[index];
  }
delete(id) {
    const retrieves = this.findOne(id);
    const index = this.class.indexOf(retrieves);
    this.class.splice(index, 1);
    return {};
  }
}
export default new studentClass();