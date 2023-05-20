// const adminRouter = require("express").Router();

// adminRouter.get("/getadmin", (req, res) => {
//   res.send("admin");
// });

// exports.adminRouter = adminRouter;
const adminRouter = require("express").Router();

adminRouter.get("/getadmin", (req, res) => {
  res.send("admin");
});

exports.adminRouter = adminRouter;