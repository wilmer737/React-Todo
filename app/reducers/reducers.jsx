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
                {
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined,

                }
            ];
            break;
            // add case for toggle_todo completed equal to opposite value, and update completedAt(
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    var nextCompleted = !todo.completed;
                    return {
                        ...todo,
                        completed: nextCompleted,
                        completedAt: nextCompleted ? moment().unix() : undefined
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