const multer = require("multer");

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Apenas imagens são permitidas"));
  }
};

const upload = multer({
  storage: multer.memoryStorage(), // Mudança principal aqui: usa armazenamento em memória
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: fileFilter,
});

module.exports = upload;
