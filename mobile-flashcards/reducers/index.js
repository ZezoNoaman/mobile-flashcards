import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'


function decks (state = {}, action) {
    switch(action.type) {
        case RECEIVE_DECKS : 
            return {
                ...state,
                ...action.decks
            };

        case ADD_DECK : 
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    cards: []
                }
            };

        case ADD_CARD : 
            return {
                ...state,
                [action.title]: {
                    ...state[action.title],
                    cards: [
                        ...state[action.title].cards,
                        {
                            question: action.question,
                            answer: action.answer
                        }
                    ]
                }
            };

        default : 
            return state;
    };
};


export default decks;