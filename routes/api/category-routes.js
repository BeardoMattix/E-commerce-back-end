const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// Route to get all categories and include products
router.get("/", async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get a single categort by the id and include the product.
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Creates a new categoryuter.post("/", async (req, res) => {
  router.post("/", async (req, res) => {
    // create a new category
    try {
      const newCategoryData = await Category.create(req.body);
      res.status(200).json(newCategoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
// Updates a category based on it's id
router.put("/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updatedCategory) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Deletes a category based on the id value.
router.delete("/:id", async (req, res) => {
  try {
    const deletecategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletecategory) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(deletecategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
