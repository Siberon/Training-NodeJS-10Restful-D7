const Product = require("../models/productModel");
const { getPostData } = require("../util");
// @desc Get All Products
// @route Get /api/products

async function getProducts(req, res) {
	try {
		const products = await Product.findAll();

		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(products));
	} catch (error) {
		console.log(error);
	}
}

// @desc Get Single Products
// @route Get /api/products/:id

async function getProduct(req, res, id) {
	try {
		const product = await Product.findById(id);

		if (!product) {
			res.writeHead(400, {
				"Content-Type": "application/json",
			});
			res.end(JSON.stringify({ message: "Product Not Found" }));
		} else {
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(product));
		}
	} catch (error) {
		console.log(error);
	}
}

// @desc Create a Product
// @route POST /api/products/:id

async function createProduct(req, res) {
	try {
		const body = await getPostData(req);

		const { title, description } = JSON.parse(body);

		const product = {
			title,
			description,
		};
		const newProduct = await Product.create(product);
		console.log(`The Product is ${newProduct}`);

		res.writeHead(201, { "Content-Type": "application/json" });
		return res.end(JSON.stringify(newProduct));
	} catch (error) {
		console.log(error);
	}
}
module.exports = {
	getProducts,
	getProduct,
	createProduct,
};
