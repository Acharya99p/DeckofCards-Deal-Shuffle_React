let db = {
    cardDecks: []
};

const DB = {
    // Saving data to the GraphQL DB
    save: (table, data) => {
        data.id = '' + new Date().getTime();
        db[table].push(data);
        return data;
    },

    // Finding one entry out of the GraphQL DB
    findOne: (table, filter) => {
        return db[table].find(filter);
    },

    // Finding all entries out of the GraphQL DB
    find: (table, filter) =>
        (filter && db[table] && db[table].filter(filter)) || db[table] || [],

    // Updating entries out of the GraphQL DB
    update: (table, filter, update) => {
        DB.find(table, filter).forEach(element => {
            element = { ...element, ...update };
        });
    }
};

export default DB;
