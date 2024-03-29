"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("./controllers/userController");
var routes = (0, express_1.Router)();
routes.get("/users", userController_1.userController.show);
routes.get("/users/:id", userController_1.userController.index);
routes.post("/users", userController_1.userController.store);
routes.put("/users/:id", userController_1.userController.update);
routes.delete("/users/:id", userController_1.userController.destroy);
exports.default = routes;
