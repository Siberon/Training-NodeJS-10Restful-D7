const products = require("../data/products.json");
const { writeDataToFile } = require("../util");
function findAll() {
	return new Promise((resolve, reject) => {
		resolve(products);
	});
}
function findById(id) {
	return new Promise((resolve, reject) => {
		const product = products.products.find((database) => database.id == id);

		resolve(product);
	});
}

function create(product) {
	return new Promise((resolve, reject) => {
		const newProduct = { ...product };
		products.products.push(newProduct);
		writeDataToFile("./data/products.json", products);
		resolve(newProduct);
	});
}
module.exports = {
	findAll,
	findById,
	create,
};
