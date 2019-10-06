import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import teststudent from './testDB';
import app from '../connection';

chai.use(chaiHttp);
const router = () => chai.request(app);


describe('my Testing suite', () => {
    it('students should be able to delete',(done)=>{
        const id= 2;
        router()
        .delete(`/api/v1/students/${id}`)
        .end((error,response)=>{
            expect(response).to.have.status([204])
            expect(response.body).to.be.a('object')
            done(error)
        })
    })

    it('students should not be able to delete',(done)=>{
        const id= 100;
        router()
        .patch(`/api/v1/students/${id}`)
        .send(teststudent[0])
        .end((error,response)=>{
            expect(response).to.have.status([404])
            expect(response.body).to.be.a('object')
            expect(response.body).to.have.property('message')
            done(error)
        })
    })
})

