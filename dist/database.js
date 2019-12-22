"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Connect {
    constructor() {
    }
    connectar() {
        mongoose_1.connect('mongobd://localhost/resApi', { useNewUrlParser: true })
            .then(db => console.log('db is connected'))
            .catch(err => console.log(err));
    }
}
const con = new Connect();
con.connectar();
exports.default = con;
