"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var auth_1 = __importDefault(require("./routes/auth"));
var app = (0, express_1["default"])();
var PORT = 3000;
var DB = "mongodb+srv://zengo:172012M@cluster0.45uf77h.mongodb.net/?retryWrites=true&w=majority";
app.use(express_1["default"].json());
app.use(auth_1["default"]);
mongoose_1["default"]
    .connect(DB)
    .then(function () {
    console.log("Database connected successfully");
})["catch"](function (e) {
    console.log(e);
});
app.listen(PORT, function () {
    console.log("Connected at port: ".concat(PORT));
});
exports["default"] = app;
