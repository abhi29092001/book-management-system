const { default: mongoose } = require("mongoose");
const Book = require("../models/booksModel");

// Get All Books
const getAllBooks = async (req, res) => {
  try {
    const response = await Book.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      count: response.length,
      data: response,
    });
  } catch (error) {
    res.json(500).json({ error: error.message });
  }
};

// Get A Single Book
const getABook = async (req, res) => {
  const { id } = req.params;

  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const response = await Book.findById({ _id: id });
      if (!response) {
        res.status(404).json({ error: "No Such Book Present" });
      }
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "No Such Book Present" });
    }
  } catch (error) {
    res.status(500).json({ error: "Ooopsss Something Went Wrong!" });
  }
};

// Create New Book
const createBook = async (req, res) => {
  const { title, author, publishedYear } = req.body;
  try {
    const response = await Book.create({ title, author, publishedYear });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Book
const updateBook = async (req, res) => {
  const { id } = req.params;

  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const response = await Book.findOneAndUpdate(
        { _id: id },
        { ...req.body }
      );
      if (!response) {
        res.status(404).json({ error: "No Such Book Present" });
      }
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "No Such Book Present" });
    }
  } catch (error) {
    res.status(500).json({ error: "Ooopsss Something Went Wrong!" });
  }
};

// Delete a Book
const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const response = await Book.findOneAndDelete({ _id: id });
      if (!response) {
        res.status(404).json({ error: "No Such Book Present" });
      }
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "No Such Book Present" });
    }
  } catch (error) {
    res.status(500).json({ error: "Ooopsss Something Went Wrong!" });
  }
};

module.exports = { createBook, getAllBooks, getABook, updateBook, deleteBook };
