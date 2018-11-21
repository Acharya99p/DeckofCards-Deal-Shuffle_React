import db from '../db';
export default {
    // Creating a deck with cards
    createDeck: (_, { name }) => {
        const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const suits = ['HEARTS', 'DIAMONDS', 'CLUBS', 'SPADES'];
        let cards = [];

        suits.forEach((suit, k) => {
            ranks.forEach((rank, i) => {
                cards.push({ id: '' + new Date().getTime() + k + i, suit, rank });
            });
        });
        let deckWithSameName = db.findOne('cardDecks', deck => deck.name === name);
        if (!deckWithSameName) {
            return db.save('cardDecks', {
                id: new Date().getTime(),
                name,
                cards
            });
        } else {
            throw new Error('Duplicate Deck Names not allowed.');
        }
    },
    // Dealing one card from deck
    dealCardFromDeck: (_, { id }) => {
        let deck = db.findOne('cardDecks', deck => deck.id === id);
        if (deck) {
            deck.cards.shift();
            db.update('cardDecks', deck => deck.id === id, { cards: deck.cards });
            return deck;
        } else {
            throw new Error('Not a valid deck. Please refresh');
        }
    },
    // Shuffling Deck
    shuffleDeck: (_, { id }) => {
        let deck = db.findOne('cardDecks', deck => deck.id === id);
        if (deck) {
            let cards = deck.cards;
            let currentIndex = cards.length;
            let temporaryValue;
            let randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = cards[currentIndex];
                cards[currentIndex] = cards[randomIndex];
                cards[randomIndex] = temporaryValue;
            }
            db.update('cardDecks', deck => deck.id === id, { cards: deck.cards });
            return deck;
        } else {
            throw new Error('Not a valid deck. Please refresh');
        }
    }
};
