exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE product CASCADE; ALTER SEQUENCE product_id_seq restart with 11')
		.then(function () {
			return knex('product').insert([
				{
					id: 1,
					name: 'Chioggia Organic Beets',
					description: 'The flavor is slightly tart with lemon-lime undertones. Rainbow carrots: Who says carrots have to be orange? Deliciously sweet rainbow carrots are born from heirloom yellow, purple, and red seeds.',
					image_url: 'https://www.highmowingseeds.com/pub/media/catalog/product/cache/image/675x675/e9c3970ab036de70892d86c6d221abfe/2/2/2269.jpg',
				},
				{
					id: 2,
					name: 'Organic Heirloom Tomatoes',
					description: 'An heirloom tomato (also called heritage tomato in the UK) is an open-pollinated (non-hybrid) heirloom cultivar of tomato.',
					image_url: 'https://upload.wikimedia.org/wikipedia/en/6/68/Heirloom_Tomatoes_2_ERD.JPG',
				},
				{
					id: 3,
					name: 'Organic Arugula',
					description: 'Arugula, Eruca sativa, is a leafy annual vegetable in the family Brassicaceae which is grown as a salad green. The arugula plant possesses a rosette of basal leaves which grow low to the ground. The leaves of the plant are deeply lobed and dull green in color.',
					image_url: 'https://s3.amazonaws.com/plantvillage-production/images/pics/000/003/334/large/3506354260_c55dcd35c1_z.jpg?1411053567',
				},
				{
					id: 4,
					name: 'Organic Heirloom Rainbow Carrots',
					description: 'The flavor is slightly tart with lemon-lime undertones. Rainbow carrots: Who says carrots have to be orange? Deliciously sweet rainbow carrots are born from heirloom yellow, purple, and red seeds.',
					image_url: 'http://www.specialtyproduce.com/sppics/5708.png',
				},
				{
					id: 5,
					name: 'Organic Almonds',
					description: 'The seed of the almond fruit is what we refer to as the almond nut. Almonds are off-white in color, covered by a thin brownish skin, and encased in a hard shell. Almonds are classified into two categories: sweet (Prunus amygdalu var. dulcis) and bitter ',
					image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Almond_Nuts.jpg',
				},
				{
					id: 6,
					name: 'Fairytail Eggplant',
					description: 'All-America Selections winner. Tender, plump and sweet, these luscious-looking mini marvels are little jewels of delicious creamy flavor. The short, slender fruits make tasty conversation pieces, with their beautifully marbled purple and white tones. In clusters of six fruits, the mini eggplants 4-5" x 1" grow on prolifically branching compact plants.',
					image_url: 'http://spicelines.com/wp-content/uploads/2013/04/IMG_7306princesseggplant400width.jpg',
				},
				{
					id: 7,
					name: 'Organic Red Romaine Lettuce',
					description: 'Brightly flavored German variety with pretty, flavorful leaves.',
					image_url: 'http://cdn.shopify.com/s/files/1/0668/4299/products/redromainelettuce3_grande.jpg?v=1420044757',
				},
				{
					id: 8,
					name: 'Organic Strawberries',
					description: 'Shiny, biconical bright red berries are a lovely sight in the garden. Berries stay around the same size from July to October. Everbearing, vigorous plants are easy to grow and keep attractive through the season. Berries are easy to pick with the calyx breaking easily from the fruit stem. Grow in full sun, in well-drained soil',
					image_url: 'http://hobbyfarms.com.s3-us-west-2.amazonaws.com/image_transfer/crops-gardening/strawberry-farms1_800.jpg',
				},
				{
					id: 9,
					name: 'Organic Blueberries',
					description: 'Very sweet, light blue fruits resist cracking. Ripen in July and the harvest goes on for weeks. Plant with at least two other blueberry varieties to ensure adequate cross-pollination.',
					image_url: 'https://i1.wp.com/www.sunshinewhispers.com/wp-content/uploads/2015/10/larriland-3.jpg',
				},
				{
					id: 10,
					name: 'Organic Watermelons',
					description: 'Divinely sweet, perfectly textured jewel red flesh, won our summer tasting of over 50 varieties. At 10-12" in diameter and 6-8 lb., this seedless watermelon is the classic "icebox" size, like a smaller but seedless Charleston Gray. Fruit has gray-green outer skin and a firm, crisp, bright red interior. Keeps its superb taste and ripe texture an extra-long time after cutting.',
					image_url: 'https://i1.wp.com/biznakenya.com/wp-content/uploads/2017/01/watermelon-farming-in-kenya.jpg?fit=1200%2C640&ssl=1',
				}
			]);
		});
};
