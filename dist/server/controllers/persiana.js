"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var persiana_1 = require("../models/persiana");
var base_1 = require("./base");
var PersianaCtrl = (function (_super) {
    __extends(PersianaCtrl, _super);
    function PersianaCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = persiana_1.default;
        // Hardcoded meanwhile mongo is set
        _this.getAll = function (req, res) {
            var persianas = [
                {
                    name: "enrollable",
                    descripcion: "Esto es una prueba",
                    galeria: [{ foto: "../assets/img/bg2.jpeg" }, { foto: "../assets/img/bg3.jpeg" }, { foto: "../assets/img/bg4.jpeg" }]
                }
            ];
            res.json(persianas);
        };
        return _this;
    }
    return PersianaCtrl;
}(base_1.default));
exports.default = PersianaCtrl;
//# sourceMappingURL=persiana.js.map