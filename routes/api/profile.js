const express = require("express");
const router = express.Router();
const mongoonse = require("mongoose");
const passport = require("passport");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// @route   GET api/profile/test
// @desc    Get Current user profile
// @access  Public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const error = {};
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          error.noprofile = "There is no profile for that user";
          return res.status(400).json(error);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
