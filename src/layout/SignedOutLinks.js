import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to="/signin">SignIn</NavLink></li>
        <li><NavLink to="/signup">Register</NavLink></li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
