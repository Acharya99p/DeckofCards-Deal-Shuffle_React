import db from '../db';
import mutations from './mutations';

const resolvers = {
    Query: {
        getDeckById: (_, { id }) => db.findOne('cardDecks', deck => deck.id === id),
        getDecksList: () => db.find('cardDecks')
    },
    Mutation: mutations
};

export default resolvers;
