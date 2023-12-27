const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getABook,
  updateBook,
  deleteBook,
} = require("../controllers/booksController");

router.get("/", getAllBooks);
router.get("/:id", getABook);
router.post("/", createBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
