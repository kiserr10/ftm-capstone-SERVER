exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE farmer_product CASCADE; ALTER SEQUENCE farmer_product_id_seq restart with 6')
		.then(function () {
			return knex('farmer_product').insert([
				{
					id: 1,
					farmer_id: 1,
					product_id: 5,
					quantity: 250,
					growing_location: 'Golden, Colorado',
					rating: 7.7
				},
				{
					id: 2,
					farmer_id: 2,
					product_id: 1,
					quantity: 1500,
					growing_location: 'Colorado Springs, Colorado',
					rating: 6.3
				},
				{
					id: 3,
					farmer_id: 4,
					product_id: 3,
					quantity: 75,
					growing_location: 'Boulder, Colorado',
					rating: 9.1
				},
				{
					id: 4,
					farmer_id: 5,
					product_id: 2,
					quantity: 250,
					growing_location: 'Boulder, Colorado',
					rating: 8
				},
				{
					id: 5,
					farmer_id: 3,
					product_id: 4,
					quantity: 250,
					growing_location: 'Fort Collins, Colorado',
					rating: 9.3
				}
			]);
		});
};
