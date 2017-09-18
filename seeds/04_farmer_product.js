exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE farmer_product CASCADE; ALTER SEQUENCE farmer_product_id_seq restart with 11')
		.then(function () {
			return knex('farmer_product').insert([
				{
					id: 1,
					farmer_id: 1,
					product_id: 1,
					quantity: 250,
					growing_location: 'Golden, Colorado',
					rating: 7.7
				},
				{
					id: 2,
					farmer_id: 2,
					product_id: 2,
					quantity: 1500,
					growing_location: 'Colorado Springs, Colorado',
					rating: 6.3
				},
				{
					id: 3,
					farmer_id: 3,
					product_id: 3,
					quantity: 75,
					growing_location: 'Boulder, Colorado',
					rating: 9.1
				},
				{
					id: 4,
					farmer_id: 4,
					product_id: 4,
					quantity: 250,
					growing_location: 'Boulder, Colorado',
					rating: 8
				},
				{
					id: 5,
					farmer_id: 5,
					product_id: 5,
					quantity: 250,
					growing_location: 'Fort Collins, Colorado',
					rating: 9.3
				},
				{
					id: 6,
					farmer_id: 6,
					product_id: 6,
					quantity: 150,
					growing_location: 'Greeley, Colorado',
					rating: 7.7
				},
				{
					id: 7,
					farmer_id: 7,
					product_id: 7,
					quantity: 500,
					growing_location: 'Colorado Springs, Colorado',
					rating: 8.3
				},
				{
					id: 8,
					farmer_id: 8,
					product_id: 8,
					quantity: 75,
					growing_location: 'Greeley, Colorado',
					rating: 7.1
				},
				{
					id: 9,
					farmer_id: 9,
					product_id: 9,
					quantity: 250,
					growing_location: 'Boulder, Colorado',
					rating: 8.3
				},
				{
					id: 10,
					farmer_id: 10,
					product_id: 10,
					quantity: 850,
					growing_location: 'Fort Collins, Colorado',
					rating: 5.3
				}
			]);
		});
};
