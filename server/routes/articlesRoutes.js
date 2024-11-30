const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articlesController");
const { validateArticle } = require("../middlewares/articleValidation");

router.get("/", articlesController.getAll);

router.get("/category/:categoryCode", articlesController.getByCategory);

router.get("/:id", articlesController.getById);

router.post("/", validateArticle, articlesController.create);

router.put("/:id", validateArticle, articlesController.update);

router.delete("/:id", articlesController.delete);

module.exports = router;
