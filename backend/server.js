const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 5001;

// Set up storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/'); // Specify the directory to store uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
  },
});

// Initialize multer
const upload = multer({ storage });

app.use(express.json());
app.use('/upload', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// Endpoint to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }
  res.json({ message: 'Image uploaded successfully!', file: req.file });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
