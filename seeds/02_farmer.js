exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE farmer CASCADE; ALTER SEQUENCE farmer_id_seq restart with 11')
		.then(function () {
			return knex('farmer').insert([
				{
					id: 1,
					account_id: 1,
					biography: 'For over three decades Kiser Farms has been at the pinnacle of beet harvesting.',
					farm_name: 'Kiser Farms',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 10
				},
				{
					id: 2,
					account_id: 2,
					biography: 'For over two decades Waller Farms has been at the pinnacle of tomato harvesting.',
					farm_name: 'Waller Farms',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 10
				},
				{
					id: 3,
					account_id: 3,
					biography: 'For over two decades Deere Farms has been at the pinnacle of Arugula harvesting.',
					farm_name: 'Deere Farms',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 8.6
				},
				{
					id: 4,
					account_id: 4,
					biography: 'For over two decades Holter Farms has been at the pinnacle of carrot harvesting.',
					farm_name: 'Holter Farms',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 4.8
				},
				{
					id: 5,
					account_id: 5,
					biography: 'For over six decades Teller Farms has been at the pinnacle of nut harvesting.',
					farm_name: 'Teller Farms',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 8
				},
				{
					id: 6,
					account_id: 6,
					biography: 'For over six decades Berkley Farms has been at the pinnacle of Eggplant harvesting.',
					farm_name: 'Berkley Farms',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 8
				},
				{
					id: 7,
					account_id: 7,
					biography: 'For over six decades Yaffee Farms has been at the pinnacle of Romain Lettuce harvesting.',
					farm_name: 'Yaffee Farms',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 8
				},
				{
					id: 8,
					account_id: 8,
					biography: 'For over six decades Watts Farms has been at the pinnacle of Strawberry harvesting.',
					farm_name: 'Watts Farming',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 8
				},
				{
					id: 9,
					account_id: 9,
					biography: 'For over six decades Read Plantations has been at the pinnacle of Blueberry harvesting.',
					farm_name: 'Read Plantations',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 8
				},
				{
					id: 10,
					account_id: 10,
					biography: 'For over six decades Johnston Farms has been at the pinnacle of Watermelon harvesting.',
					farm_name: 'Johnston Farms',
					image_url: 'http://images.all-free-download.com/images/graphicthumb/tomato_plant_red_218370.jpg',
					rating: 8
				},
			]);
		});
};
