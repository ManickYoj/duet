import { REQUEST_TODOS, RECEIVE_TODOS } from './actions';

const initialState = {
  todos: [],
}

function app(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TODOS:
      return Object.assign({}, state);

    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        todos: action.todos,
      });

    default:
      return state;
  }
}

export default app;
