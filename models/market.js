const { Model } = require('objection');

class Market extends Model {
	static get tableName() {
		return 'market';
	}

	static get relationMappings() {
		return {
			farmers: {
				relation: Model.ManyToManyRelation,
				modelClass: __dirname + '/Farmer',
				join: {
					from: 'market.id',
					through: {
						from: 'farmer_market.market_id',
						extra: ['attend_date'],
						to: 'farmer_market.farmer_id'
					},
					to: 'farmer.id'
				}
			},
			farmer_product: {
				relation: Model.ManyToManyRelation,
				modelClass: __dirname + '/Farmer_Product',
				join: {
					from: 'market.id',
					through: {
						from: 'farmer_product_market.market_id',
						to: 'farmer_product_market.farmer_product_id'
					},
					to: 'farmer_product.id'
				}
			}
		};
	}
}

module.exports = Market;
