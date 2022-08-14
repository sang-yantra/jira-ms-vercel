/*
    configure services and middleware
*/
import express from "express";
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import swaggerAutoGen from "swagger-autogen"
import swaggerJsDoc from "swagger-jsdoc";
///routers
import routes from "./routes.js";
import css from "../../swagger.js"

const app = express();
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
        }
    },
    apis: ["./src/api/routes.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
const customOptions1 = {
    customCssUrl: "@/swagger.css"
}

const customOptions = {
    customCss: css
}

app.use(express.static("public"));
app.use(express.json({ extended: false }));
app.use(cors());
app.use(express.urlencoded());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs, customOptions))

app.use('/', routes);

export default app;





