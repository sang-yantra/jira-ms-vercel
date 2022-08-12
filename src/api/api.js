/*
    configure services and middleware
*/
import express from "express";
import cors from "cors"

///routers
import { mapRoutes } from "./routes.js";

import path from "path";

const app = express();

const Configure = () => {

    app.use(express.static("public"));
    app.use(express.json({ extended: false }));
    app.use(cors());
    app.use(express.urlencoded());


    // define the first route
    app.get("/", function (req, res) {
        res.send("<h1>Hello World!</h1>");
    });
    app.get("/test", function (req, res) {
        const x = "";
        res.json("working fine....");
    });

    ///router mappimg
    mapRoutes(app)


    // start the server listening for requests
    const PORT = process.env.PORT || 3030;
    app.listen(PORT, () => console.log("Server is running...", PORT));
};

const ConfigureServices = () => { };

export { Configure, ConfigureServices };
