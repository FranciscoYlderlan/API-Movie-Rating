
export function up(knex) { 

    return knex.schema.createTable('MovieNotes', table => {
        table.increments('id').unsigned().primary();
        table.string('title').notNull();
        table.string('description').nullable();
        table.integer('rating').notNull();
        table.integer('user_id').notNull().references("id").inTable("users").onDelete("CASCADE");
        table.timestamp('created_at').default(knex.fn.now());
        table.timestamp('updated_at').default(knex.fn.now());
    });     
}

export function down(knex) { 
    return knex.schema.dropTable('MovieNotes'); 
}
