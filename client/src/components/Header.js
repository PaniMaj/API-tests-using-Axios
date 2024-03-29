import React from 'react'
import { Link } from 'react-router-dom'

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className='nav navbar-nav pull-xs-right'>
        <li className='nav-item' data-testid='home'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>

        <li className='nav-item' data-testid='sign-in'>
          <Link to='/login' className='nav-link'>
            Sign in
          </Link>
        </li>

        <li className='nav-item' data-testid='sign-up'>
          <Link to='/register' className='nav-link'>
            Sign up
          </Link>
        </li>
      </ul>
    )
  }
  return null
}

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className='nav navbar-nav pull-xs-right'>
        <li className='nav-item' data-testid='home'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>

        <li className='nav-item' data-testid='new-post'>
          <Link to='/editor' className='nav-link'>
            <i className='ion-compose' />
            &nbsp;New Post
          </Link>
        </li>

        <li className='nav-item' data-testid='settings'>
          <Link to='/settings' className='nav-link'>
            <i className='ion-gear-a' />
            &nbsp;Settings
          </Link>
        </li>

        <li className='nav-item' data-testid='profile'>
          <Link to={`/@${props.currentUser.username}`} className='nav-link'>
            <img
              src={props.currentUser.image}
              data-testid='profile-image'
              className='user-pic'
              alt={props.currentUser.username}
            />
            {props.currentUser.username}
          </Link>
        </li>
      </ul>
    )
  }

  return null
}

class Header extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-light'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    )
  }
}

export default Header
