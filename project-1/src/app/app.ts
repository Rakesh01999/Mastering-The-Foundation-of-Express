import express, { NextFunction, Request, Response } from 'express'
// const express = require('express')
const app = express()
const port = 3000

// parser
app.use(express.json());
app.use(express.text());

// 

const userRouter = express.Router()
const courseRouter = express.Router()

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post('/create-user', (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  })
})


userRouter.post('/create-course', (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: "course is created successfully",
    data: course,
  })
})



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
