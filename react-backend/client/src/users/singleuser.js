import React from 'react';

class SingleUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      newName: props.user.username,
      newPhone: props.user.phone
    }
  }

  switchMode = () => {
    const lastMode = this.state.editing

    this.setState({
      editing: !lastMode
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    fetch(`/users/${this.props.user.username}/edit`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: this.props.user.username,
                             newName: this.state.newName,
                             phone: this.props.user.phone,
                             newPhone: this.state.newPhone })
    })
    .then(() => {
      this.props.history.push(`/users/${this.state.newName}/edit`);
      this.props.history.push(`/users/${this.state.newPhone}/edit`);
    })
  }

  render() {
    let { editing, newName, newPhone } = this.state;

    if (!editing) {
      return (
        <div>
          <h3> { this.props.user.username } </h3>
          <button onClick={ this.switchMode }> Edit </button>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={ this.submitForm }>
            <label>
              New Username:
              <input value={ newName } type="text" name="username" onChange={ this.handleChange } />
            </label><br /><br />
            <label>
              New Phone No.:
              <input value={ newPhone } type="text" name="phone" onChange={ this.handleChange } />
            </label><br /><br />

            <input type="submit" value="Submit" />
          </form>

          <button onClick={ this.switchMode }> Cancel </button>
        </div>
      )
    }
  }
}

export default SingleUser;
