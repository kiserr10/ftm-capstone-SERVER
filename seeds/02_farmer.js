exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE farmer CASCADE; ALTER SEQUENCE farmer_id_seq restart with 4')
		.then(function () {
			return knex('farmer').insert([
				{
					id: 1,
					account_id: 2,
					biography: 'For over two decades Waller Farms has been at the pinnacle of tomato harvesting.',
					farm_name: 'Waller Farms',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 10
				},
				{
					id: 2,
					account_id: 4,
					biography: 'For over two decades Waller Farms has been at the pinnacle of carrot harvesting.',
					farm_name: 'Holter Farms',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 10
				},
				{
					id: 3,
					account_id: 3,
					biography: 'For over two decades Waller Farms has been at the pinnacle of lettuce harvesting.',
					farm_name: 'Deere Farms',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 10
				}
			]);
		});
};
