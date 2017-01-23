var React = require('react');

var AddTodo = React.createClass({
    propTypes: {
        onAddTodo: React.PropTypes.func,
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var newTodo = this.refs.todoText.value;
        if (newTodo.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(newTodo);
        } else {
            this.refs.todoText.focus();
        }
    },

    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit} className="new-todo-form">
                    <input type="text" ref="todoText" placeholder="Enter new Todo" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;