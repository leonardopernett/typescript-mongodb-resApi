"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    getList(Req, res) {
        res.render('index.ejs');
    }
}
const indexController = new IndexController();
exports.default = indexController;
