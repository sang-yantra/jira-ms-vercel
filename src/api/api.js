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


const app = express();
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Jira Api",
            description: "Rest aps for Jira app built in Node js",
            contact: {
                name: "Anup Mahato"
            },
            servers: ["http://localhost:3030"]
        }
    },
    apis: ["./src/api/routes.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.static("public"));
app.use(express.json({ extended: false }));
app.use(cors());
app.use(express.urlencoded());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/', routes);

export default app;





