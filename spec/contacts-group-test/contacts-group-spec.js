var Request = require("request");

describe("Contacts APIs", () => {
    var server;
    beforeAll(() => {
        server = require("../../index");
    });

    describe("API to create a new contact group", () => {
        var responseData = {
            "status": "success",
            "successMessage": "Contact Group created successfully",
            "data": {}
        };
        var postData = {
            "name": "friends555",
            "contactList": [
                "5cd32192650d8b280ddf3551",
                "5cd32166096d5327e467b6ea"
            ]
        }
        var data = {};
        beforeAll((done) => {
            Request.post({
                url: 'http://localhost:5001/api/contactGroups',
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


    describe("API to search a contact group with id", () => {
        var data = {};
        beforeAll((done) => {
            Request.get('http://localhost:5001/api/contactGroups/5cd3c0101f87fa2ded6774c2', (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
    });

    describe("API to delete a contact group with id", () => {
        var data = {};
        beforeAll((done) => {
            Request.delete('http://localhost:5001/api/contactGroups/5cd3c0101f87fa2ded6774c2', (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
    });

    describe("API to list a existing contact group ", () => {
        var responseData = {
            "status": "success",
            "successMessage": "Contact Group update was successful",
            "data": {}
        };
        var postData = {
            "id": "5cd3c0101f87fa2ded6774c2",
            "name": "friends55",
            "contactList": [
                "5cd1b474cf8304d8845dba51"
            ]

        }
        var data = {};
        beforeAll((done) => {
            Request.put({
                url: 'http://localhost:5001/api/contactGroups',
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

    describe("API to list all the contacts groups", () => {
        var data = {};
        beforeAll((done) => {
            Request.get('http://localhost:5001/api/contactGroups', (error, response, body) => {
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