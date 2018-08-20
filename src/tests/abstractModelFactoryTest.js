"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var abstractModelFactory_1 = require("../factories/abstractModelFactory");
var abstractModelFactoryTest = /** @class */ (function (_super) {
    __extends(abstractModelFactoryTest, _super);
    function abstractModelFactoryTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    abstractModelFactoryTest.prototype.CreateModel = function (arg) {
        throw new Error("Method not implemented.");
    };
    return abstractModelFactoryTest;
}(abstractModelFactory_1.abstractModelFactory));
