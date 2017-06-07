import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';
import axios from 'axios';

class AppPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
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

          <div>
            <button>+ New Task</button>
            <ul>
              <Todo title={"Test"} tags={["foo", "bar"]} completed={false}/>
            </ul>
          </div>          
        </div>
      </div>
    )
  }
}

AppPage.propTypes = {
  createNewTask: PropTypes.func, // Should be required
}

export default AppPage;