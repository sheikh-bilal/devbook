import React from 'react';
import {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const {email, password} = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();
    console.log('SUCCESS');
  }
  return (
    <Fragment>
      <h2 className="large text-primary text-center"><i className="fas fa-sign-in-alt mr-1"></i> Sign In</h2>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  )
}
export default Login
