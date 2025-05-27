require("dotenv").config();
const express = require("express");
const cors = require("cors");
const  app = express();
const PORT = 3000;
const authRoute = require("./router/auth-router");
const serviceRoute = require("./router/service-router");
const contactRoute = require("./router/contact-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// applying cors
const corsOptions = {
  origin: "http://localhost:5173", //Frontend address for connecting backend server to frontend
  methods: "GET, POST, PUT, DELETE, HEAD, PATCH",
  credentials: true,
};
//app.use(cors(corsOptions));
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

//app.get("/", (req, res) => {
  //  res.status(200).send("Welcome to our site");
//});

//app.get("/register", (req, res) => {
  //  res.status(200).send("Welcome to our registration page");
//});
connectDb().then(() => {
app.listen(PORT, () =>{
    console.log('server is running at port: 3000');
});
});

  