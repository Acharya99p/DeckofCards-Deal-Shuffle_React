import { gql } from 'apollo-server-express';

export default gql`
  type Card {
    id: ID!
    suit: String!
    rank: Int!
  }

  type Deck {
    id: ID!
    cards: [Card]!
    name: String
  }

  type Query {
    getDeckById(id: String): Deck
    getDecksList: [Deck]
  }

  type Mutation {
    createDeck(name: String): Deck
    dealCardFromDeck(id: String): Deck
    shuffleDeck(id: String): Deck
  }
`;
