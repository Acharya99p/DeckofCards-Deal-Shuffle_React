// Fetching data fro graphql Api
const fetchData = (tableName, props, fields, mutation) =>
    fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `${(mutation === true && 'mutation') || ''}{${tableName +
                (props ? `(${props})` : '')}{${fields}}}`
        })
    })
        .then(res => res.json())
        .then(res => {
            if (!res.errors) {
                return res.data[tableName];
            }
            alert(res.errors[0].message);
        });

// Exporting add deck of cards

export default {
    addDeck: name => fetchData('createDeck', `name:"${name}"`, 'id,name', true),
    shuffleDeck: deckId => fetchData('shuffleDeck', `id: "${deckId}"`, 'cards{id,suit,rank}', true),
    dealACard: deckId =>
        fetchData('dealCardFromDeck', `id: "${deckId}"`, 'cards{id,suit,rank}', true),
    getDeckList: () => fetchData('getDecksList', null, 'id,name'),
    getDeckDetail: deckId => fetchData('getDeckById', `id: "${deckId}"`, 'cards{id,suit,rank}')
};
