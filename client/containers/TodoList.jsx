import { connect } from 'react-redux'

import { addTodo, fetchTodos } from '../actions'
import TodoList from '../components/TodoList';

const mapStateToProps = (state, props) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addTodo: (name) => {
      dispatch(addTodo(name));
    },
    fetchTodos: () => {
      dispatch(fetchTodos());
    },
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer