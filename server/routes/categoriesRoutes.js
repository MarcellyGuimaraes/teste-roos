const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");
const { validateCategory } = require("../middlewares/categoryValidation");

router.get("/", categoriesController.getAll);

router.get("/:id", categoriesController.getById);

router.post("/", validateCategory, categoriesController.create);

router.put("/:id", validateCategory, categoriesController.update);

router.delete("/:id", categoriesController.delete);

module.exports = router;
