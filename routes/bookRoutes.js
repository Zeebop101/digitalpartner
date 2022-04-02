const express = require('express');
const router = express.Router();
const {
  addBook,
  getAllBooks,
  deleteBook,
} = require('../controllers/bookController');

router.post('/add', addBook);
router.get('/get-all', getAllBooks);
router.post('/delete', deleteBook);

module.exports = router;
