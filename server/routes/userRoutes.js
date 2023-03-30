const router = require("express").Router();
const { register } = require("../controllers/usersController");
const { login }  = require("../controllers/usersController");
const { addbill } = require("../controllers/billsController");

router.post("/register",register);
router.post("/login",login);
router.post("/addbill",addbill);


module.exports = router;

