import React, { PropTypes } from 'react';
import axios from 'axios';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onChange(e, key) {
    e.preventDefault;
    const stateUpdate = {};
    stateUpdate[key] = e.target.value
    this.setState(stateUpdate);
  }

  createUser(e) {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/auth/register', {
      username,
      password,
    });
  }

  loginUser(e) {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/auth/login', {
      username,
      password,
    });
  }

  render() {
    return (
      <div className="cont-center single-page">
        <div id="login-window">
          <div className="cont-column">
            <h1>duet</h1>
            <h3>to-do</h3>
          </div>

          <form method="post" action="/auth/login" className="cont-column">
            <div>{/* Errors go here */}</div>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={(e) => this.onChange(e, 'username')}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={(e) => this.onChange(e, 'password')}
            />
            <input
              onSubmit={(e) => this.loginUser(e)}
              type="submit"
              value="Log In"/>
            <button onClick={(e) => this.createUser(e)}>Create Account</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage;