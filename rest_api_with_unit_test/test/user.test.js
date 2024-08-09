import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';

const should = chai.should();

chai.use(chaiHttp);

describe('Users API', () => {
    describe('GET /api/users', () => {
        it('it should GET all the users', (done) => {
            chai.request(app)
                .get('/api/users')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(2);
                    done();
                });
        });
    });

    describe('GET /api/users/:id', () => {
        it('it should GET a user by the given id', (done) => {
            const userId = 1;
            chai.request(app)
                .get(`/api/users/${userId}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id').eql(userId);
                    res.body.should.have.property('name');
                    done();
                });
        });

        it('it should return 404 for a user not found', (done) => {
            const userId = 999;
            chai.request(app)
                .get(`/api/users/${userId}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});
