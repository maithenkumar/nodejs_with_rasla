// const userRouter = require('express').Router();

// userRouter.get('/', (req, res) => {
//     res.send('user');
// })

// exports.userRouter = userRouter;
const userRouter = require('express').Router();

userRouter.get('/', (req, res) => {
    res.send('user');
})

exports.userRouter = userRouter;