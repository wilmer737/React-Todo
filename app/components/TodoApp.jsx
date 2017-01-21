var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog',
                },{
                    id: 2,
                    text: 'clean the chicken',
                },{
                    id: 3,
                    text: 'be beraco',
                },{
                    id: 4,
                    text: 'buy the finca',
                },
            ]
        };
    },

    handleAddTodo: function (todo) {
        alert('new todo: ' + todo);

    },
    
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase(),
        });
    },

    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <Search onSeach={this.handleSearch}/>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;