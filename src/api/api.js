import express from "express";
import cors from "cors"
import swaggerUi from "swagger-ui-express"

import swaggerJsDoc from "swagger-jsdoc";
import swaggerOptions from "./microservice/middlewares/swagger/swagger.js";
import swaggercss from "./microservice/middlewares/swagger/swagger-style.js"
///routers
import routes from "./microservice/router/index.js";

const app = express();
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// customm css for swagger
// const customOptions1 = {
//     customCssUrl: "@/swagger.css"
// }

const customOptions = {
    customCss: swaggercss
}

app.use(express.static("public"));
app.use(express.json({ extended: false }));
app.use(cors());
app.use(express.urlencoded());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs, customOptions))

app.use('/', routes);

export default app;





