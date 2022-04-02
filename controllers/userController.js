const { default: mongoose } = require('mongoose');
const User = require('../models/userModel');

// @desc    Adds a new user
// @route   POST /api/users/add
// @access  Public
const addUser = (req, res) => {
  const { firstName, lastName, street, plz, birthday, password } = req.body;
  customerNumber = Math.floor(10000000 + Math.random() * 90000000);
  User.create(
    {
      customerNumber: customerNumber,
      firstName: firstName,
      lastName: lastName,
      street: street,
      birthday: birthday,
      plz: plz,
      password: password,
    },
    (err, addedUser) => {
      if (err) res.status(400).json(err);
      else res.status(200).json(addedUser);
    }
  );
};

// @desc    Gets all users
// @route   GET /api/users/get-all
// @access  Public
const getAllUsers = (req, res) => {
  User.find({})
    .populate('library.book')
    .exec((err, allUsers) => {
      if (err) res.status(400).json(err);
      else res.status(200).json(allUsers);
    });
};

// @desc    Gets a specific user
// @route   POST /api/users/get
// @access  Public
const getUser = (req, res) => {
  const { customerNumber } = req.body;
  User.find({ customerNumber })
    .populate('library.book')
    .exec((err, user) => {
      if (err) res.status(400).json(err);
      else res.status(200).json(user);
    });
};

// @desc    Updates a user
// @route   POST /api/users/add
// @access  Public
const updateUser = (req, res) => {
  const {
    customerNumber,
    firstName,
    lastName,
    street,
    plz,
    birthday,
    password,
  } = req.body;
  User.findOneAndUpdate(
    {
      customerNumber: customerNumber,
    },
    {
      firstName: firstName,
      lastName: lastName,
      street: street,
      birthday: birthday,
      plz: plz,
      password: password,
    },
    (err, updatedUser) => {
      if (err) res.status(400).json(err);
      else res.status(200).json(updatedUser);
    }
  );
};

// @desc    Deletes a user
// @route   POST /api/users/delete
// @access  Public
const deleteUser = (req, res) => {
  const { customerNumber } = req.body;
  User.findOneAndDelete(
    {
      customerNumber: customerNumber,
    },
    (err, deletedUser) => {
      if (err) res.status(400).json(err);
      else res.status(200).json(deletedUser);
    }
  );
};

// @desc    Adds books to a user's library
// @route   POST /api/users/add-books
// @access  Public
const addBooksToLibrary = (req, res) => {
  const { books, userID } = req.body;
  const arrayToPush = books.map((book) => {
    return {
      book: mongoose.Types.ObjectId(book.book._id),
      condition: book.condition,
    };
  });
  User.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(userID) },
    {
      library: arrayToPush,
    },
    (err, addedBooks) => {
      if (err) {
        res.status(400).json(err);
        console.log(err);
      } else {
        res.status(200).json(addedBooks);
      }
    }
  );
};

module.exports = {
  addUser,
  getAllUsers,
  updateUser,
  deleteUser,
  addBooksToLibrary,
  getUser,
};
