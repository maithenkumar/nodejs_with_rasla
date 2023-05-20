// MONGO_URL=mongodb//://127.0.0.1:27017/testdb
// PORT=4000
require("dotenv").config();
const express = require("express");
const helmet = require("helmet"),
  cors = require("cors"),
  morgan = require("morgan");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

const {adminmiddleware} = require("./middleware/admin.middleware")
const { usermiddleware } = require("./middleware/user.middleware");



console.log("not conneted..");
require("./config/dbconfig")

console.log("conneted..");
models
const usermodel = require("./models/user.model");

routes

const {adminRouter} = require("./routes/admin")
const {userRouter} = require("./routes/user")

app.use("/admin", adminmiddleware, adminRouter);
app.use("/user", usermiddleware, userRouter);

app.use((req, res, next) => {
  const apikey = req.headers["x-api-key"];

  if (apikey === "12345") {
    next();
  } else {
    return res.status(401).send("Unauthorized");
  }
});

app.get("/users", async (req, res) => {
  try {
    return res.json(await usermodel.find({}));
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await usermodel.findById(id);

    return res.json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.post("/adduser", async (req, res) => {
  const { username, email } = req.body;

  try {
    if (!username || !email) {
      return res.status(400).send("All Fields are required");
    }

    const newuser = await usermodel.create({
      username: username,
      email: email,
    });

    await newuser.save();

    return res.json({
      message: "user created",
      data: newuser,
    });
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const {username, email} = req.body;

  try {
    const user = await usermodel.findById(id);

    if(!user) {
      return res.status(404).send("user not found");
    }

    user.username = username || user.username;
    user.email = email || user.email;

    await user.save();

    return res.json({
      message: "user updated",
      data: user,
    })
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await usermodel.findByIdAndDelete(id);

    return res.json({
      message: "user deleted",
      data: user,
    })

  } catch (error) {
    return res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🚀`);
});
