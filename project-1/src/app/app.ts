import express, { NextFunction, Request, response, Response } from 'express'
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

app.get('/', logger, (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.query.name);
  // console.log(req.query.email);

  // res.send('Hello Developers !')
  // res.send(something) // to make error
  try {
    res.send(something);
  } catch (error) {
    // console.log(error);
    next(error)
    // res.status(400).json({
    //   success: false,
    //   message: 'failed to get data',
    // })
  }

});

app.post('/', logger, (req: Request, res: Response) => {
  console.log(req.body);
  // res.send("got data");
  res.json({
    message: "successfully received data",
  });
});


app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not found ",
  });
});


// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong'
    })
  }
});



export default app;
