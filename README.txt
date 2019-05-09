The project has a monolithic architecture.

The different layers that are present: 
    Routers
    Middleware
    Controller
    Service
    DAO

Routers:    It defines all the API endpoint.
Middleware: It acts as a filter for the Controllers. All the validations are done here
Controller: The initial request will come to the controller.
Services:   All the internal logic will happen at this layer.
DAO:        All the functionalites related to Database will happen at this layer.

The test cases are written in "spec" folder.
The Databse utility to establish DB connection is written in "utils" folder so as to maintain Singleton pattern.
The beans are written in "dto" folder.
The constants are written in "constanst" folder.

API Endpoints: 
1) Contact Entity -
    Description: Add a contact
    Method: POST
    URL: http://localhost:5001/api/contacts
    DATA:   {
                "name": "asai",
                "number_tags": [
                    {
                        "name": "work",
                        "numbers": ["555", "555"]
                    },
                    {
                        "name": "personal",
                        "numbers": [777, "888"]
                    }
                ],
                "email_tags": [
                    {
                        "name": "office",
                        "emails": ["asai_of1@gmail.com","asai_of2@gmail.com"]
                    },
                        {
                            "name": "personal",
                            "emails": ["asai_pers1@gmail.com", "asai_pers2@gmail.com"]
                        }
                ]
            }

    Description: Search a contact
    Method: GET
    URL: http://localhost:5001/api/contacts/:keyword
    DATA: keyword

    Description: Delete a contact
    Method: DELETE
    URL: http://localhost:5001/api/contacts/:contactId
    DATA: contactId

    Description: List all contacts
    Method: GET
    URL: http://localhost:5001/api/contacts
    DATA:

    Description: Update a contact
    Method: PUT
    URL: http://localhost:5001/api/contacts
    DATA:   {
                "id": "5cd1b474cf8304d8845dba51",
                "name": "deepak7",
                "number_tags": [
                    {
                        "name": "work",
                        "numbers": ["111", "222"]
                    },
                    {
                        "name": "personal",
                        "numbers": ["333", "444"]
                    }
                ],
                "email_tags": [
                    {
                        "name": "office",
                        "emails": ["of1@gmail.com","of2@gmail.com"]
                    },
                        {
                            "name": "personal",
                            "emails": ["pers1@gmail.com", "pers2@gmail.com"]
                        }
                ]
            }

2) Contact Groups Entity -
    Description: To add a new Contact group
    Method: POST
    URL: http://localhost:5001/api/contactGroups
    DATA:   {
                "name": "friends01",
                "contactList": [
                    "contact_id_1",
                    "contact_id_2"
                ]
                
            }

    Description: To update a contact group
    Method: PUT
    URL: http://localhost:5001/api/contactGroups
    DATA:   {
                "id": "5cd3c0101f87fa2ded6774c2",
                "name": "friends56",
                "contactList": [
                    "contact_id_1"
                ]
                
            }

    Description: To delete a contact group
    Method: DELETE
    URL: http://localhost:5001/api/contactGroups/:contactGroupId
    DATA: contactGroupId

    Description: To list contacts under a contact group
    Method: GET
    URL: http://localhost:5001/api/contactGroups/:contactGroupId
    DATA: contactGroupId

    Description: To list all the contact group names
    Method: GET
    URL: http://localhost:5001/api/contactGroups
    DATA: 