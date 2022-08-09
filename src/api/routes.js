import * as tasks from "./controllers/tasksController.js";
import { API_VERSIONING } from "./constants/index.js";

export const mapRoutes = (app) => {
    app.get(API_VERSIONING + "/tasks", tasks.getTasks);
    app.get(API_VERSIONING + "/tasks/:id", tasks.getTask);
}