import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { addTodo, todos } = this.props;
    const todoElements = todos.map((el, index) => {
      return <Todo
        key={index}
        title={el.name}
        tags={[]}
        completed={false}
      />
    });

    return (
      <div>
        <button onClick={() => addTodo("foo")}>+ New Task</button>
        <ul>
          {todoElements}
        </ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}

export default TodoList;