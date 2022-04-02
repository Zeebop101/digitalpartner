const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  customerNumber: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: false,
  },
  plz: {
    type: String,
    required: false,
  },
  birthday: {
    type: Date,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  library: [
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
      },
      condition: {
        type: String,
        required: false,
      },
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
