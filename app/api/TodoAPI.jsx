var $ = require('jQuery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },

    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];
    },

    filterTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // Filter by show completed
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
        // Filter by search text
        filteredTodos = filteredTodos.filter((todo) => {
            return searchText.lengh === 0 || todo.text.toLowerCase().indexOf(searchText) > -1;
        });

        // sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            //return -1 // a before b
            //return 1 // b before a
            // return 0 nothing happens
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }

        });

        return filteredTodos;
    },
};
