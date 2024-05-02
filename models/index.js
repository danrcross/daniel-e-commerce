// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo a single Category (many products can belong to one category)
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products (one category can have many products)
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
// Defines that a product can have many tags
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    // because there can be multiple instances of a ProductTag with the same product-tag combo
    unique: false,
  },
  as: "product_has_tags",
});
// Tags belongToMany Products (through ProductTag)
// Defines that a tag can have many products
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tag_has_products",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
