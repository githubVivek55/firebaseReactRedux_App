import React, {Component} from 'react';
import {createProject} from './../store/actions/projectAction';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  };
  handleChange = e => {
    this.setState ({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault ();
    this.props.createProject (this.state);
    this.setState ({
      title: '',
      content: '',
    });
    this.props.history.push ('/');
  };

  render () {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Content:</label>
            <textarea
              className="materialize-textarea"
              id="content"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch (createProject (project)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (CreateProject);
