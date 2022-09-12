//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const User = require('../db/schemas/users');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);
//Our parent block

describe('Checking ETH Wallet', () => {

    /*
      * Test the /POST route
      */
    describe('/POST check_eth_wallet', () => {
        it('wallet exists', (done) => {
            chai.request(server)
                .post('/check_eth_wallet')
                .send({
                    address: "0xA34995cb25DD9b0F18B1884e0618923B896f1a6E"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property("message");
                    res.body.status.should.be.eql("Success");
                    done();
                });
        });

        it('wallet dose not exist', (done) => {
            chai.request(server)
                .post('/check_eth_wallet')
                .send({
                    address: "1xA34995cb25DD9b0F18B1884e0a1ee23B896f1a6E"
                })
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property("message");
                    res.body.status.should.be.eql("Error");
                    done();
                });
        });
    });

});

describe("Checking user", () => {

    describe("/POST /auth/register", () => {
        it("user should be created", done => {
            const user = {
                email: "aaa@aaa.me",
                username: "aaa",
                password: "aaaaa"
            }
            chai.request(server)
                .post("/auth/register")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property('email').eql(user.email);
                    res.body.should.have.property('username').eql(user.username);
                    done()

                })
        })

        it("user should not be created(wrong email and wrong username)", done => {
            const user = {
                email: "aaa@aaa.me",
                username: "aaa",
                password: "aaaaa"
            }
            chai.request(server)
                .post("/auth/register")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a("object");
                    res.body.should.have.property('status').eql("Error");
                    // res.body.should.have.property('message').eql(user.username);
                    done()

                })
        })
    })
    describe("/POST /auth/login", () => {
        it("user should be logged in", (done) => {
            const user = {
                email: "aaa@aaa.me",
                username: "aaa",
                password: "aaaaa"
            }
            chai.request(server)
            .post("/auth/login")
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property('status').eql("Success");
                res.body.should.have.property('username').eql(user.username);
                res.body.should.have.property('email').eql(user.email);
                // User.deleteOne({email: user.email});
                done()

            })
        })

        it("user should not be logged in", (done) => {
            const user = {
                email: "111aaa@aaa.me",
                username: "aaa",
                password: "aaaaa"
            }
            chai.request(server)
            .post("/auth/login")
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a("object");
                res.body.should.have.property('status').eql("Error");
                // res.body.should.have.property('username').eql(user.username);
                // res.body.should.have.property('email').eql(user.email);
                User.deleteOne({email: user.email});
                done()

            })
        })
    })
})                    
