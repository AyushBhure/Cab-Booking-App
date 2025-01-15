const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long."),
    body("email").isEmail().withMessage("Please provide a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("vehicle.plate")
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage("Plate is required"),
    body("vehicle.color")
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage("Color is required"),
    body("vehicle.vehicleType")
      .notEmpty()
      .isIn(["car", "auto", "motorcycle"])
      .withMessage("Type is required"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be a positive integer"),
  ],
  captainController.registerCaptain
);
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please provide a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  captainController.loginCaptain
);
router.get(
  "/profile",
  authMiddleware.authCaptain,
  captainController.getCaptainProfile
);
router.get(
  "/logout",
  authMiddleware.authCaptain,
  captainController.logoutCaptain
);

module.exports = router;
