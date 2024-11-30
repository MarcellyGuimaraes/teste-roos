const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articlesController");
const { validateArticle } = require("../middlewares/articleValidation");
const upload = require("../middlewares/uploadValidation");

router.get("/", articlesController.getAll);

router.get("/category/:categoryCode", articlesController.getByCategory);

router.get("/:id", articlesController.getById);

router.post(
  "/",
  upload.single("image"),
  validateArticle,
  articlesController.create
);

router.put(
  "/:id",
  upload.single("image"),
  validateArticle,
  articlesController.update
);

router.delete("/:id", articlesController.delete);

module.exports = router;
