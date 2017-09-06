
exports.up = function(knex, Promise) {
	return knex.schema.createTable('farmer_market', (table) =>{
		table.increments('id').primary();
		table.integer('farmer_id').unsigned();
		table.foreign('farmer_id').references('id').inTable('farmer').onDelete('cascade');
		table.integer('market_id').unsigned();
		table.foreign('market_id').references('id').inTable('market').onDelete('cascade');
		table.text('attend_date').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('farmer_market');
};
