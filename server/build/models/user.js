"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1["default"].Schema({
    name: {
        required: true,
        type: String,
        trim: true
    },
    email: {
        required: true,
        type: String,
        trim: true,
        validate: {
            validator: function (value) {
                var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message: "Invalid format of email address!"
        }
    },
    password: {
        required: true,
        type: String
    },
    address: {
        type: String,
        "default": ""
    },
    type: {
        type: String,
        "default": "user"
    }
});
var User = mongoose_1["default"].model("User", userSchema);
exports["default"] = User;
