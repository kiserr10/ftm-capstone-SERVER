exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE farmer_market CASCADE; ALTER SEQUENCE farmer_market_id_seq restart with 16')
		.then(function () {
			return knex('farmer_market').insert([
				{
					id: 1,
					farmer_id: 1,
					market_id: 1,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 2,
					farmer_id: 2,
					market_id: 2,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 3,
					farmer_id: 3,
					market_id: 3,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 4,
					farmer_id: 4,
					market_id: 4,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 5,
					farmer_id: 5,
					market_id: 5,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 6,
					farmer_id: 6,
					market_id: 6,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 7,
					farmer_id: 7,
					market_id: 7,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 8,
					farmer_id: 8,
					market_id: 8,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 9,
					farmer_id: 9,
					market_id: 9,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 10,
					farmer_id: 10,
					market_id: 10,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 11,
					farmer_id: 6,
					market_id: 1,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 12,
					farmer_id: 5,
					market_id: 2,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 13,
					farmer_id: 4,
					market_id: 3,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 14,
					farmer_id: 3,
					market_id: 4,
					attend_date: '10/10 10:00AM'
				},
				{
					id: 15,
					farmer_id: 5,
					market_id: 4,
					attend_date: '10/10 10:00AM'
				}
			]);
		});
};
