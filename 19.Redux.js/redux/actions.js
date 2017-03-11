/**
 * Created by eden90267 on 2017/3/11.
 */
let actions = {
    addTodo: (text) => {
        return ({
            type: 'ADD_TODO',
            text
        });
    },
    toggleTodo: (id) => {
        return ({
            type: 'TOGGLE_TODO',
            id
        });
    },
    FilterTodo: (filter) => {
        return ({
            type: 'SET_VISBILITY_FILTER',
            filter
        });
    },
    con: () => {
        return (dispatch, getState) => {
            console.log('現在的Store是');
            console.log(getState());
        };
    }
}

export default actions;