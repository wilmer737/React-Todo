var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state='', action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
            break;
        default:
            return state;
            break;
    }
};

export var showCompletedReducer = (state=false, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
            break;
        default:
            return state;
            break;
    }
};

export var todosReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.todo,
            ];
            break;
            // add case for toggle_todo completed equal to opposite value, and update completedAt(
        case 'UPDATE_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        ...action.updates,
                    };
                } else {
                    return todo;
                }

                return todo;
            });
            break;
        case 'ADD_TODOS':
            return [
                ...state,
                ...action.todos,
            ];
            break;
        default:
            return state;
            break;
    }
};