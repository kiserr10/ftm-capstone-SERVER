exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE farmer_product_market CASCADE; ALTER SEQUENCE farmer_product_market_id_seq restart with 6')
		.then(function () {
			return knex('farmer_product_market').insert([
				{
					id: 1,
					farmer_product_id: 5,
					market_id: 1
				},
				{
					id: 2,
					farmer_product_id: 4,
					market_id: 1
				},
				{
					id: 3,
					farmer_product_id: 3,
					market_id: 2
				},
				{
					id: 4,
					farmer_product_id: 2,
					market_id: 4
				},
				{
					id: 5,
					farmer_product_id: 1,
					market_id: 4
				}
			]);
		});
};
