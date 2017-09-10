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
		};
	}
}

module.exports = Market;
