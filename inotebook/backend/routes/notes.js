const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const Note = require("../models/Note");

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "enter a valid title").isLength({ min: 3 }),
    body("description", "description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const save_note = await note.save();
      res.json(save_note);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
module.exports = router;
