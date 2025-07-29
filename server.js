// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Replace <your_password> with the real password
const mongoURI = 'mongodb+srv://andeyashaswini9912:MyMongoPass123@apnaproconnect.kfu2yhv.mongodb.net/persondb?retryWrites=true&w=majority&appName=apnaproconnect';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.use(cors());
app.use(bodyParser.json());

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
