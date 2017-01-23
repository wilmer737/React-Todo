var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;
            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return `${message} ${moment.unix(timestamp).format('MMM Do YY @ h:mm a')}`;
        };
        return (
            <div onClick={() => {
                this.props.onToggle(id)
            }} className={todoClassName}>
                <input type='checkbox' checked={completed} />
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

module.exports = Todo;
