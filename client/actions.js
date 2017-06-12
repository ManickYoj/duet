import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';

export const REQUEST_TODOS = 'REQUEST_TODOS';
function requestTodos() {
  return {
    type: REQUEST_TODOS,
  }
}

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos,
  }
}

export function fetchTodos() {
  return (dispatch) => {
    dispatch(requestTodos());
    return axios.get('/todos')
      .then(res => {
        console.log(res.data)
        dispatch(receiveTodos(res.data));
      })
      .catch(err => {
        console.error(err);
      });
  }
}

// TODO: Make a proper optimistic update
export function addTodo(name) {
  return (dispatch) => {
    return axios.post('/todos', {
      name,
    })
    .then(res => {
      dispatch(fetchTodos());
    })
    .catch(err => {
      console.error(err);
    });
  }
}