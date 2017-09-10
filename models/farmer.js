const { Model } = require('objection');

class Farmer extends Model {
	static get tableName() {
		return 'farmer';
	}

	static get relationMappings() {
		return {
			products: {
				relation: Model.ManyToManyRelation,
				modelClass: __dirname + '/Product',
				join: {
					from: 'farmer.id',
					through: {
						from: 'farmer_product.farmer_id',
						to: 'farmer_product.product_id'
					},
					to: 'product.id'
				}
			},
			markets: {
				relation: Model.ManyToManyRelation,
				modelClass: __dirname + '/Market',
				join: {
					from: 'farmer.id',
					through: {
						from: 'farmer_market.farmer_id',
						to: 'farmer_market.market_id'
					},
					to: 'market.id'
				}
			}
		};
	}
}

module.exports = Farmer;
