const { Model } = require('objection');

class Product extends Model {
	static get tableName() {
		return 'product';
	}

	static get relationMappings() {
		return {
			farmers: {
				relation: Model.ManyToManyRelation,
				modelClass: __dirname + '/Farmer',
				join: {
					from: 'product.id',
					through: {
						from: 'farmer_product.product_id',
						extra: ['quantity', 'rating', 'growing_location'],
						to: 'farmer_product.farmer_id'
					},
					to: 'farmer.id'
				}
			}
		};
	}
}

module.exports = Product;
