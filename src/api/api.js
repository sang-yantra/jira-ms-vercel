/*
    configure services and middleware
*/
import express from "express";

import * as task from "./controllers/tasks.js";
import path from "path";

const app = express();
const Configure = () => {
    app.use(express.static("public"));

    // define the first route
    app.get("/", function (req, res) {
        res.send("<h1>Hello World!</h1>");
    });
    app.get("/test", function (req, res) {
        res.json("working fine....");
    });
    app.get("/api/1/tasks", async function (req, res) {
        try {

            const gettasks = await task.GetTasks();
            res.json(gettasks);
        }
        catch (error) {
            console.log(error)
            res.json(error)
        }
    });

    // start the server listening for requests
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log("Server is running...", PORT));
};

const ConfigureServices = () => { };

export { Configure, ConfigureServices };
