import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import teststudent from './testDB';
import app from '../connection';

chai.use(chaiHttp);
const router = () => chai.request(app);


describe('my Testing suite', () => {
    it('student should be able to delete',(done)=>{
        const id= 20;
        router()
        .delete(`/api/v1/students/${id}`)
        .end((error,response)=>{
            expect(response).to.have.status([200])
            expect(response.body).to.be.a('object')
            expect(response.body).to.have.property('message')
            done(error)
        })
    })

    it('student should not be able to delete',(done)=>{
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

