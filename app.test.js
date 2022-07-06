const app = require('./app');
const request = require('supertest');

describe('test', ()=>{
    let server = null;
    beforeEach((done)=>{
        server = app.listen(0, (err)=>{
            if(err){
                return done(err);
            }
            done();
        });
    });

    afterEach(()=>{
        server.close();
    });

    it('status code should be 200', (done)=>{
        request(app)
            .get('/')
            .expect(200, done);
    });

    it('test /users response', (done)=>{
        request(app).get('/users').expect(200).expect('respond with a resource', done);
    });

});