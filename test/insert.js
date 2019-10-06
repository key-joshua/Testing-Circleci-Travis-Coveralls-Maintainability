import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import teststudent from './testDB';
import app from '../connection';

chai.use(chaiHttp);
const router = () => chai.request(app);


describe('my Testing suite', () => {
    it('students should be able to signup',(done)=>{
        router()
        .post('/api/v1/students/')
        .send(teststudent[0])
        .end((error,response)=>{
            expect(response).to.have.status([201])
            expect(response.body).to.be.a('object')
            expect(response.body).to.have.property('message')
            done(error)
        })
    })

    it('students should not be able to signup',(done)=>{
        router()
        .post('/api/v1/students/')
        .send(teststudent[1])
        .end((error,response)=>{
            expect(response).to.have.status([400])
            expect(response.body).to.have.property('message')
            done(error)
        })
    })

    it('students should not be able to signup',(done)=>{
        router()
        .post('/api/v1/students/aabbcc')
        .send(teststudent[1])
        .end((error,response)=>{
            expect(response).to.have.status([404])
            done(error)
        })
    })


})

