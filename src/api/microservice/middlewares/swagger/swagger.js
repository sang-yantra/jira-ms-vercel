import swaggerJsDoc from "swagger-jsdoc";
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: "Jira Api",
            description: "Rest aps for Jira app built in Node js",
            license: {
                name: 'Licensed Under MIT',
                url: 'https://spdx.org/licenses/MIT.html',
            },
            contact: {
                name: "Anup Mahato",
                url: 'https://jsonplaceholder.typicode.com'
            },
            servers: [
                {
                    url: 'http://localhost:3030',
                    description: 'Development server',
                },
            ]
        },
        tags: [{
            name: "test",
            description: "test api"

        }, {
            name: "Tasks",
            description: "Tasks endpoints"

        }],
        components: {
            schemas: {
                "test": {
                    type: "object",
                    properties: {
                        "id": {
                            type: "number"
                        }
                    }
                },
                "Task": {
                    type: "object",
                    properties: {
                        "ID": {
                            type: "number",
                            example: "1"
                        },
                        "TITLE": {
                            type: "string",
                            example: "Testin task"
                        },
                        "DESCRiPTION": {
                            type: "string",
                            example: "This is a testing task"
                        },
                        "ACCEPTANCE_CRITERIA": {
                            type: "string",
                            example: "verify that this is completed"
                        },
                        "NFR": {
                            type: "string",
                            "format": "nullable"
                        },
                        "STATUS": {
                            type: "string",
                            example: "NEW"
                        },
                        "PRIORITY": {
                            type: "string",
                            example: "LOW"
                        },
                        "ORIGINAL_ESTIMATE": {
                            type: "number",
                            example: "10"
                        },
                        "COMPLETED": {
                            type: "number",
                            example: "7"
                        },
                        "REMAINING": {
                            type: "number",
                            example: "3"
                        }
                    }
                },
                "TaskPost": {
                    type: "object",
                    properties: {
                        "Title": {
                            type: "string",
                            example: "Testing task"
                        },
                        "Type": {
                            type: "string",
                            example: "Normal"
                        },
                        "Description": {
                            type: "string",
                            example: "This is a testing task"
                        },
                        "Acceptance_Criteria": {
                            type: "string",
                            example: "verify that this is completed"
                        },
                        "Nfr": {
                            type: "string",
                            "format": "nullable"
                        },
                        "Status": {
                            type: "string",
                            example: "New"
                        },
                        "Original_Estimate": {
                            type: "number",
                            example: "10"
                        },
                        "Completed": {
                            type: "number",
                            example: "7"
                        },
                        "Remaining": {
                            type: "number",
                            example: "3"
                        },
                        "Created_Date": {
                            type: "string",
                            format: "date-time",
                            example: new Date()
                        },
                        "Updated_Date": {
                            type: "string",
                            format: "date-time",
                            example: new Date()
                        }
                    }
                }
            },
        },

    },
    apis: [
        "./src/api/microservice/router/tasksManagementRouter.js"
    ]
}

export default swaggerOptions;