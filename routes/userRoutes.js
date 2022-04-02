const express = require('express');
const router = express.Router();
const {
  addUser,
  getAllUsers,
  updateUser,
  deleteUser,
  addBooksToLibrary,
  getUser,
} = require('../controllers/userController');

router.post('/add', addUser);
router.get('/get-all', getAllUsers);
router.post('/update', updateUser);
router.post('/delete', deleteUser);
router.post('/add-books', addBooksToLibrary);
router.post('/get', getUser);

module.exports = router;
