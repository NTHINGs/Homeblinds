"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var persianaSchema = new mongoose.Schema({
    name: String,
    descripcion: String,
    galeria: [{ foto: String }]
});
var Persiana = mongoose.model('Persiana', persianaSchema);
exports.default = Persiana;
//# sourceMappingURL=persiana.js.map