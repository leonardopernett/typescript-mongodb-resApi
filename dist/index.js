"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = require("mongoose");
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const route_1 = __importDefault(require("./router/route"));
const post_1 = __importDefault(require("./router/post"));
const user_1 = __importDefault(require("./router/user"));
const compression_1 = __importDefault(require("compression"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.middleware();
        this.route();
        this.static();
        this.connected();
    }
    async connected() {
        mongoose_1.connect('mongodb://localhost/resApi', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('db is connected');
    }
    config() {
        this.app.set('port', process.env.PORT || 3001);
        this.app.set('views', path_1.default.resolve('views'));
        this.app.set('view engine', 'ejs');
    }
    middleware() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(helmet_1.default());
        this.app.use(compression_1.default());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
    }
    route() {
        this.app.use('/api', route_1.default);
        this.app.use('/api/posts', post_1.default);
        this.app.use('/api/users', user_1.default);
        //validar la ruta que no se encuentre
        this.app.use((req, res) => {
            res.status(404).send('route not found');
        });
    }
    static() {
        this.app.use(express_1.default.static(path_1.default.resolve('public')));
    }
    async start() {
        await this.app.listen(this.app.get('port'));
        console.log('server on port ', this.app.get('port'));
    }
}
const server = new Server();
server.start();
