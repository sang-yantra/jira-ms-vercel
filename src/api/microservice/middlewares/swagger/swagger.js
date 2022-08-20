import swaggerJsDoc from "swagger-jsdoc";

const TaskStatusUpdateBody = {
    "TaskPatch": {
        type: "object",
        properties: {
            "Status": {
                type: "string",
                example: "New"
            }
        }
    }
}

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

        }, {
            name: "Teams",
            description: "Teams endpoints"

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
                },
                "TaskStatusUpdate": TaskStatusUpdateBody.TaskPatch,
                "TeamPost": {
                    type: "object",
                    properties: {
                        "Name": {
                            type: "string",
                            example: "Normal"
                        },
                        "Description": {
                            type: "string",
                            example: "This is a testing task"
                        }
                    }
                }
            },
        },

    },
    apis: [
        "./src/api/microservice/router/tasksManagementRouter.js",
        "./src/api/microservice/router/teamsManagementRouter.js"
    ]
}

export default swaggerOptions;