process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../server');
const db = require('../../database/database');

const migrationsConfig = {

};

describe('routes : auth', () => {

  beforeEach(() => {
    return db.migrate.rollback()
    .then(() => { return db.migrate.latest(migrationsConfig); });
  });

  afterEach(() => {
    return db.migrate.rollback(migrationsConfig);
  });


  describe('POST /auth/register', () => {
    it('should register a new user', (done) => {
      chai.request(server)
      .post('/auth/register')
      .send({
        username: 'testuser',
        password: 'myotherpasswordispassword',
      })
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.status.should.eql('success');

        done();
      });
    });
  });

  describe('POST /auth/login', () => {
    it('should login a user', (done) => {
      chai.request(server)
      .post('/auth/login')
      .send({
        username: 'burin',
        password: 'moonshot',
      })
      .end((err, res) => {
        should.not.exist(err);
        // res.redirects.length.should.eql(0);
        console.log(res)
        res.status.should.eql(200);
        // res.type.should.eql('application/json');
        // res.body.status.should.eql('success');
        done();
      });
    });
  });
});