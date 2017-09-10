const { Model } = require('objection');

class Account extends Model {
	static get tableName() {
		return 'account';
	}

	static get relationMappings() {
		return {
			farmer: {
				relation: Model.BelongsToOneRelation,
				modelClass: __dirname + '/Farmer',
				join: {
					from: 'farmer.account_id',
					to: 'account.id'
				}
			}
		};
	}
}

module.exports = Account;
