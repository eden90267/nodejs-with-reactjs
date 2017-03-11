/**
 * Created by eden90267 on 2017/3/11.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

let getId = 1;

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [{
                text: action.text,
                completed: false,
                id: getId++
            }, ...state];
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return {...todo, completed: !todo.completed};
            });
        default:
            return state;
    }
}

function visbility(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_VISBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todos,
    visbility,
    routing: routerReducer,
});

export default rootReducer;