
exports.up = function(knex, Promise) {
	return knex.schema.createTable('market_product', (table) =>{
		table.increments('id').primary();
		table.integer('market_id').unsigned();
		table.foreign('market_id').references('id').inTable('market').onDelete('cascade');
		table.integer('product_id').unsigned();
		table.foreign('product_id').references('id').inTable('product').onDelete('cascade');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('market_product');
};
