import React from 'react';
import PropTypes from 'prop-types';
import TodoListContainer from '../containers/TodoList';

class AppPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { addTodo } = this.props;
    const name = "Nick Francisci";

    return (
      <div className="cont-column">
        <div id="todo-window">
          <div className="cont-row">
            <div>
              <h4>*Date*</h4>
              <h4>Daily Worksheet for {name}</h4>
              <h3>*Objective Statement*</h3>
            </div>

            <div>*Progress Wheel*</div>
          </div>

          <TodoListContainer />
        </div>
      </div>
    )
  }
}

export default AppPage;