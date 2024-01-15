import { Product } from "../modal/products.js";

export const createProducts = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
export const getProductsById = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};

export const replaceProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ _id: id }, req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const updateProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};
