exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE farmer_product_market CASCADE; ALTER SEQUENCE farmer_product_market_id_seq restart with 16')
		.then(function () {
			return knex('farmer_product_market').insert([
				{
					id: 1,
					farmer_product_id: 1,
					market_id: 1
				},
				{
					id: 2,
					farmer_product_id: 2,
					market_id: 2
				},
				{
					id: 3,
					farmer_product_id: 3,
					market_id: 3
				},
				{
					id: 4,
					farmer_product_id: 4,
					market_id: 4
				},
				{
					id: 5,
					farmer_product_id: 5,
					market_id: 5
				},
				{
					id: 6,
					farmer_product_id: 6,
					market_id: 6
				},
				{
					id: 7,
					farmer_product_id: 7,
					market_id: 7
				},
				{
					id: 8,
					farmer_product_id: 8,
					market_id: 8
				},
				{
					id: 9,
					farmer_product_id: 9,
					market_id: 9
				},
				{
					id: 10,
					farmer_product_id: 10,
					market_id: 10
				},
				{
					id: 11,
					farmer_product_id: 6,
					market_id: 1
				},
				{
					id: 12,
					farmer_product_id: 5,
					market_id: 2
				},
				{
					id: 13,
					farmer_product_id: 4,
					market_id: 3
				},
				{
					id: 14,
					farmer_product_id: 3,
					market_id: 4
				},
				{
					id: 15,
					farmer_product_id: 5,
					market_id: 4
				}
			]);
		});
};
