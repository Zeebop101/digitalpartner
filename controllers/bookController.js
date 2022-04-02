const Book = require('../models/bookModel');
const User = require('../models/userModel');
const randomstring = require('randomstring');
const path = require('path');
const fs = require('fs');
const { default: mongoose } = require('mongoose');

// @desc    Adds a new book
// @route   POST /api/books/add
// @access  Public
const addBook = (req, res) => {
  let imageArr = [];
  const { title, publisher, genre, pages, format } = req.body;
  const { images } = req.files;

  if (Array.isArray(images)) imageArr.push(...images);
  else imageArr.push(images);

  // genres are received in a simple string
  // it is being parsed into an array
  const genreArr = genre.split(/\W+/);
  //this holds the paths that have to be
  //stored in the db
  const imagePaths = [];
  //maps through each file, gets its extension, generates
  //a random filename and finally saves the file on the server
  imageArr.map((image) => {
    const randomFileName = randomstring.generate(20);
    const fileExtension = image.name.split('.').pop();
    imagePaths.push(`./images/books/${randomFileName}.${fileExtension}`);
    const filePath = path.join(
      __dirname,
      '..',
      '..',
      'client',
      'public',
      'images',
      'books',
      `${randomFileName}.${fileExtension}`
    );
    image.mv(filePath);
  });
  Book.create(
    {
      images: imagePaths,
      title: title,
      publisher: publisher,
      genre: genreArr,
      pages: pages,
      format: format,
    },
    (err, addedBook) => {
      if (err) {
        console.log(err);
        res.status(400).json(err);
      } else res.status(200).json(addedBook);
    }
  );
};

// @desc    Gets all books
// @route   POST /api/books/get-all
// @access  Public
const getAllBooks = (req, res) => {
  Book.find({}, (err, allBooks) => {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else res.status(200).json(allBooks);
  });
};

// @desc    Delete a book
// @route   POST /api/books/delete
// @access  Public
const deleteBook = (req, res) => {
  const { bookID } = req.body;
  Book.findOneAndDelete(
    { _id: mongoose.Types.ObjectId(bookID) },
    (err, deletedBook) => {
      if (err) {
        console.log(err);
        res.status(400).json(err);
      } else {
        if (deletedBook.images.length !== 0) {
          deletedBook.images.map((image) => {
            let fileName = image.split('/')[3];
            let filePath = path.join(
              __dirname,
              '..',
              '..',
              'client',
              'public',
              'images',
              'books',
              `${fileName}`
            );
            fs.unlink(filePath, (err) => {
              if (err) console.log(err);
            });
          });
        }
        User.updateMany(
          { 'library.book': mongoose.Types.ObjectId(bookID) },
          {
            $pull: { library: { book: mongoose.Types.ObjectId(bookID) } },
          },
          (err, deletedBookInLib) => {
            if (err) {
              console.log(err);
              res.status(400).json(err);
            } else res.status(200).json(deletedBookInLib);
          }
        );
      }
    }
  );
};

module.exports = {
  addBook,
  getAllBooks,
  deleteBook,
};
