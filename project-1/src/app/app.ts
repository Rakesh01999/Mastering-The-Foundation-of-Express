import express, { NextFunction, Request, Response } from 'express'
// const express = require('express')
const app = express()
const port = 3000

// parser
app.use(express.json());
app.use(express.text());


const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
}


// app.get('/:userId/:subId', (req: Request, res: Response) => {
//   console.log(req.params);
//   res.send('Hello Developers !')
// })

// app.get('/', (req: Request, res: Response) => {
//   // console.log(req.query.name);
//   // console.log(req.query.email);
//   res.send('Hello Developers !')
// })

app.get('/', logger, (req: Request, res: Response) => {
  // console.log(req.query.name);
  // console.log(req.query.email);
  res.send('Hello Developers !')
});

app.post('/', logger, (req: Request, res: Response) => {
  console.log(req.body);
  // res.send("got data");
  res.json({
    message: "successfully received data",
  });
});

export default app;
