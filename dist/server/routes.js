"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var persiana_1 = require("./controllers/persiana");
var user_1 = require("./controllers/user");
function setRoutes(app) {
    var router = express.Router();
    var persianaCtrl = new persiana_1.default();
    var userCtrl = new user_1.default();
    // Persianas
    router.route('/persianas').get(persianaCtrl.getAll);
    router.route('/persianas/count').get(persianaCtrl.count);
    router.route('/persiana').post(persianaCtrl.insert);
    router.route('/persiana/:id').get(persianaCtrl.get);
    router.route('/persiana/:id').put(persianaCtrl.update);
    router.route('/persiana/:id').delete(persianaCtrl.delete);
    // Users
    router.route('/login').post(userCtrl.login);
    router.route('/users').get(userCtrl.getAll);
    router.route('/users/count').get(userCtrl.count);
    router.route('/user').post(userCtrl.insert);
    router.route('/user/:id').get(userCtrl.get);
    router.route('/user/:id').put(userCtrl.update);
    router.route('/user/:id').delete(userCtrl.delete);
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map