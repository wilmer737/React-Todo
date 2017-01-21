var React = require('react');

var AddTodo = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var newTodo = this.refs.todo.value;
        if (newTodo.length > 0) {
            this.refs.todo.value = '';
            this.props.onAddTodo(newTodo);
        }
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="new-todo-form">
                    <input type="text" ref="todo" placeholder="Enter new Todo" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;