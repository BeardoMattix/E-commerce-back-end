const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// Route to get all categories and include products
router.get("/", (req, res) => {
  try {
    const catergoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get a single categort by the id and include the product.
router.get("/:id", (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    req.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  try{
    const updatedCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: { 
          id: req.params.id
        },
      }
    );
    if(!updatedCategory) {
      res.status(404).json({message: "No category found with that id!"});
      return;
    }
    res.status(200).json(updatedCategory);
  } catch(err){
    res.status(500).json(err);
  }
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
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
