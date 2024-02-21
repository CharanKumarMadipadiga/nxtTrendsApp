import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  onSubmitForm = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="app-container">
        <div className="login-form-con">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              className="login-image"
              alt="website login"
            />
          </div>
          <form className="form-card-container" onSubmit={this.onSubmitForm}>
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                className="website-logo"
                alt="website logo"
              />
            </div>
            <div className="input-container">
              <label className="label-El" htmlFor="username">
                USERNAME
              </label>
              <input
                type="text"
                className="input-El"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="input-container">
              <label className="label-El" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                className="input-El"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
