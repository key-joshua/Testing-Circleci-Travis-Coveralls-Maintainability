import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../connection';

chai.use(chaiHttp);
const router = () => chai.request(app);


describe('my Testing suite', () => {
    it('students should be able to retrieve marks',(done)=>{
        router()
        .get('/api/v1/students/')
        .end((error,response)=>{
            expect(response).to.have.status([200])
            expect(response.body).to.be.a('object')
            expect(response.body).to.have.property('message')
            done(error)
        })
    })

    it('students should not be able to retrieve single marks',(done)=>{
        const id= 1;
        router()
        .get(`/api/v1/students/${id}`)
        .end((error,response)=>{
            expect(response).to.have.status([200])
            expect(response.body).to.be.a('object')
            expect(response.body).to.have.property('message')
            done(error)
        })
    })

    it('students should not be able to retrieve single marks',(done)=>{
        const id= 100;
        router()
        .get(`/api/v1/students/${id}`)
        .end((error,response)=>{
            expect(response).to.have.status([404])
            expect(response.body).to.be.a('object')
            expect(response.body).to.have.property('message')
            done(error)
        })
    })
})