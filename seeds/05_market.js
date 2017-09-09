exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE market CASCADE; ALTER SEQUENCE market_id_seq restart with 6')
		.then(function () {
			return knex('market').insert([
				{
					id: 1,
					name: 'Cherry Creek Fresh Market'
				},
				{
					id: 2,
					name: "Highland United Neighbors Farmers' Market"

				},
				{
					id: 3,
					name: 'Cherry Creek Fresh Market'

				},
				{
					id: 4,
					name: 'Cherry Creek Fresh Market'

				},
				{
					id: 5,
					name: 'Cherry Creek Fresh Market'

				}
			]);
		});
};
