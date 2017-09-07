exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE product CASCADE; ALTER SEQUENCE product_id_seq restart with 6')
		.then(function () {
			return knex('product').insert([
				{
					id: 1,
					name: 'Organic Heirloom Rainbow Carrots',
					description: 'The flavor is slightly tart with lemon-lime undertones. Rainbow carrots: Who says carrots have to be orange? Deliciously sweet rainbow carrots are born from heirloom yellow, purple, and red seeds.',
					image_url: 'http://www.specialtyproduce.com/sppics/5708.png',
					growing_location: 'Golden, Colorado',
					rating: 7.7
				},
				{
					id: 2,
					name: 'Chioggia Organic Beets',
					description: 'The flavor is slightly tart with lemon-lime undertones. Rainbow carrots: Who says carrots have to be orange? Deliciously sweet rainbow carrots are born from heirloom yellow, purple, and red seeds.',
					image_url: 'https://www.highmowingseeds.com/pub/media/catalog/product/cache/image/675x675/e9c3970ab036de70892d86c6d221abfe/2/2/2269.jpg',
					growing_location: 'Colorado Springs, Colorado',
					rating: 6.3
				},
				{
					id: 3,
					name: 'Organic Almonds',
					description: 'The seed of the almond fruit is what we refer to as the almond nut. Almonds are off-white in color, covered by a thin brownish skin, and encased in a hard shell. Almonds are classified into two categories: sweet (Prunus amygdalu var. dulcis) and bitter ',
					image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Almond_Nuts.jpg',
					growing_location: 'Boulder, Colorado',
					rating: 9.1
				},
				{
					id: 4,
					name: 'Organic Arugula',
					description: 'Arugula, Eruca sativa, is a leafy annual vegetable in the family Brassicaceae which is grown as a salad green. The arugula plant possesses a rosette of basal leaves which grow low to the ground. The leaves of the plant are deeply lobed and dull green in color.',
					image_url: 'https://s3.amazonaws.com/plantvillage-production/images/pics/000/003/334/large/3506354260_c55dcd35c1_z.jpg?1411053567',
					growing_location: 'Boulder, Colorado',
					rating: 8
				},
				{
					id: 5,
					name: 'Organic Heirloom Tomatoes',
					description: 'An heirloom tomato (also called heritage tomato in the UK) is an open-pollinated (non-hybrid) heirloom cultivar of tomato.',
					image_url: 'https://upload.wikimedia.org/wikipedia/en/6/68/Heirloom_Tomatoes_2_ERD.JPG',
					growing_location: 'Fort Collins, Colorado',
					rating: 9.3
				}
			]);
		});
};
