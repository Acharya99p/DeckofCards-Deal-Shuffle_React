import { combineReducers } from 'redux';
import deckList from './deckList';
import deckBoard from './deckBoard';

// mapping all reducer in combine reducer
const reducers = combineReducers({
    deckList,
    deckBoard
});

export default reducers;
