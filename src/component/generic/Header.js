import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext'
import UserContext from '../context/UserContext'


class Header extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {
          userContext =>
            <ThemeContext.Consumer>
              {
                theme =>
                  <header style={{ border: 'solid 1px ', padding: '1em', margin: '1em', display: 'flex', justifyContent: 'space-between', ...theme }}>
                    <h2>my header</h2>

                    {
                      userContext.authenticated ? <span>hi {`${userContext.user.name}`} <span onClick={() => userContext.logOut()} style={{ color: 'red' }}>logout</span></span> : <Link to="/login">LOGIN</Link>
                    }


                  </header>
              }
            </ThemeContext.Consumer>

        }
      </UserContext.Consumer>
    )
  }
}

export default Header;