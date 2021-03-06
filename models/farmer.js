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
						extra: ['quantity', 'rating', 'growing_location'],
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
						extra: ['attend_date'],
						to: 'farmer_market.market_id'
					},
					to: 'market.id'
				}
			},
			account: {
				relation: Model.BelongsToOneRelation,
				modelClass: __dirname + '/Account',
				join: {
					from: 'account.id',
					to: 'farmer.account_id'
				}
			},
			// farmer_product: {
			// 	relation: Model.BelongsToOneRelation,
			// 	modelClass: __dirname + '/Farmer_Product',
			// 	join: {
			// 		from: 'farmer.id',
			// 		to: 'farmer_product.farmer_id'
			// 	}
			// }
		};
	}
}

module.exports = Farmer;
