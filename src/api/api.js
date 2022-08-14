import express from "express";
import cors from "cors"
import swaggerUi from "swagger-ui-express"

import swaggerJsDoc from "swagger-jsdoc";
import swaggerOptions from "../../swagger.js";
///routers
import routes from "./routes.js";
import css from "../../swagger-style.js"

const app = express();


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





