const router = require("express").Router();

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");


router.patch("/update-me", authController.protect, userController.updateMe);

router.post("/register", authController.register);

router.post("/send-otp", authController.sendOTP);
router.post("/verify-otp", authController.verifyOTP);
router.post("/forget-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);


module.exports = router;
 

// put and patch use here is for updating 