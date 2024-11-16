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
    res.send('Hello Developers !');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    // res.send("got data");
    res.json({
        message: "successfully received data",
    });
});
exports.default = app;
