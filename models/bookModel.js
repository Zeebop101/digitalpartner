const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  images: [
    {
      type: String,
      required: true,
    },
  ],
  title: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  genre: [
    {
      type: String,
      required: false,
    },
  ],
  pages: {
    type: String,
    required: false,
  },
  format: {
    type: String,
    required: false,
  },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
