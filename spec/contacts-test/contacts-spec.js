var Request = require("request");

describe("Contacts APIs", () => {
    var server;
    beforeAll(() => {
        server = require("../../index");
    });

    describe("API to create a new contact", () => {
        var responseData = {
            "status": "success",
            "successMessage": "Contact created successfully",
            "data": {}
        };
        var postData = {
            "name": "deepak9",
            "number_tags": [{
                    "name": "work",
                    "numbers": ["111", "222"]
                },
                {
                    "name": "personal",
                    "numbers": ["333", "444"]
                }
            ],
            "email_tags": [{
                    "name": "office",
                    "emails": ["of1@gmail.com", "of2@gmail.com"]
                },
                {
                    "name": "personal",
                    "emails": ["pers1@gmail.com", "pers2@gmail.com"]
                }
            ]
        }
        var data = {};
        beforeAll((done) => {
            Request.post({
                url: 'http://localhost:5001/api/contacts',
                form: postData
            }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body).toBe(JSON.stringify(responseData));
        });
    });


    describe("API to search a contact with a keyword", () => {
        var data = {};
        beforeAll((done) => {
            Request.get('http://localhost:5001/api/contacts/22', (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
    });

    describe("API to delete a contact with a id", () => {
        var data = {};
        beforeAll((done) => {
            Request.delete('http://localhost:5001/api/contacts/5cd320d85398c027783cde33', (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
    });

    describe("API to update a existing contant", () => {
        var responseData = {
            "status": "success",
            "successMessage": "Contact update was successful",
            "data": {}
        };
        var postData = {
            "id": "5cd31f04ea8b5f260daa3e39",
            "name": "deepak99",
            "number_tags": [{
                    "name": "work",
                    "numbers": ["111", "222"]
                },
                {
                    "name": "personal",
                    "numbers": ["333", "444"]
                }
            ],
            "email_tags": [{
                    "name": "office",
                    "emails": ["of1@gmail.com", "of2@gmail.com"]
                },
                {
                    "name": "personal",
                    "emails": ["pers1@gmail.com", "pers2@gmail.com"]
                }
            ]
        }
        var data = {};
        beforeAll((done) => {
            Request.put({
                url: 'http://localhost:5001/api/contacts',
                form: postData
            }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body).toBe(JSON.stringify(responseData));
        });
    });

    describe("API to list all the contacts", () => {
        var data = {};
        beforeAll((done) => {
            Request.get('http://localhost:5001/api/contacts', (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
    });

});