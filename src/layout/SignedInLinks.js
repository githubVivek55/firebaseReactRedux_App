import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authAction';

const SignedInLinks = props => {
  const {initial} = props.profile;
  return (
    <div>
      <ul className="right">
        <li><NavLink to="/create">New Project</NavLink></li>
        <li><a onClick={props.signOut} to="/">Logout</a></li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            {initial}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch (signOut ()),
  };
};

export default connect (null, mapDispatchToProps) (SignedInLinks);
