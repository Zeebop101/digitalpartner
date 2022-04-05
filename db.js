const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.DATABASE_URL
      // 'mongodb+srv://ibrahimfarooq17:digitallibrary1234@cluster0.rk0mq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    console.log(`MONGODB CONNECTED: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
