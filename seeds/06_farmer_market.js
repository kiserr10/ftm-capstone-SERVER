exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE farmer_market CASCADE; ALTER SEQUENCE farmer_market_id_seq restart with 6')
		.then(function () {
			return knex('farmer_market').insert([
				{
					id: 1,
					farmer_id: 5,
					market_id: 1,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 2,
					farmer_id: 4,
					market_id: 1,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 3,
					farmer_id: 3,
					market_id: 4,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 4,
					farmer_id: 2,
					market_id: 5,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 5,
					farmer_id: 1,
					market_id: 3,
					attend_date: '10/10 10:00AM'
				}
			]);
		});
};
