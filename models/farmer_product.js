const { Model } = require('objection');

class FarmerProduct extends Model {
	static get tableName() {
		return 'farmer_product';
	}

	static get relationMappings() {
		return {
			markets: {
				relation: Model.ManyToManyRelation,
				modelClass: __dirname + '/Market',
				join: {
					from: 'farmer_product.id',
					through: {
						from: 'farmer_product_market.farmer_product_id',
						to: 'farmer_product_market.market_id'
					},
					to: 'market.id'
				}
			},
			product: {
				relation: Model.BelongsToOneRelation,
				modelClass: __dirname + '/Product',
				join: {
					from: 'farmer_product.product_id',
					to: 'product.id'
				}
			},
		};
	}
}

module.exports = FarmerProduct;
