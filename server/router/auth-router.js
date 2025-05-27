const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const {signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

//const { home, register } = require("../controllers/auth-controller");

router.route("/").get(authcontrollers.home);
router.route("/register").post( validate(signupSchema),authcontrollers.register);
router.route("/login").post( validate(loginSchema),authcontrollers.login);
router.route("/user").get(authMiddleware, authcontrollers.user);



//router.get('/', (req, res) => {
   // res.status(200).send("Hi chunmun");
//});

//router.get('/register', (req, res) => {
   // res.status(200).send("Welcome to registration page");
//});

module.exports = router;
