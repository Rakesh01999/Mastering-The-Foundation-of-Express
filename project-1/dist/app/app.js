"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express')
const app = (0, express_1.default)();
const port = 3000;
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
// 
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user,
    });
});
userRouter.post('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course is created successfully",
        data: course,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// app.get('/:userId/:subId', (req: Request, res: Response) => {
//   console.log(req.params);
//   res.send('Hello Developers !')
// })
// app.get('/', (req: Request, res: Response) => {
//   // console.log(req.query.name);
//   // console.log(req.query.email);
//   res.send('Hello Developers !')
// })
app.get('/', logger, (req, res) => {
    // console.log(req.query.name);
    // console.log(req.query.email);
    // res.send('Hello Developers !')
    // res.send(something) // to make error
    try {
        res.send(something);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'failed to get data',
        });
    }
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    // res.send("got data");
    res.json({
        message: "successfully received data",
    });
});
// global error handler
app.use((error, req, res, next) => {
    console.log(error);
});
exports.default = app;
