const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth"));

// Generic error handler
app.use((error, req, res, next) => {
  console.error("An error occurred:", error);
  res.status(500).json({ message: "Something went wrong on the server." });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));