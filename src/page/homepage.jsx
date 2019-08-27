/* @flow */

import React from 'react';
import {
  domain,
} from '../config/api';

// css
require('../css/homepage.css');

type Props = { user: any, addUser: (user: any) => void };

type State = { val: string }

class Index extends React.Component<Props, State> {
  state: State = {
    val: '',
  }

  onSearch = () => {
    const {
      val,
    } = this.state;
    fetch(`${domain}api/user?username=${val}`, {
      mode: 'cors',
      method: 'GET',
    }).then((response) => response.json()).then((data) => {
      this.props.addUser(data);
    });
  }

  onInputChange = (event: any) => {
    this.setState({
      val: event.target.value,
    });
  }

  render() {
    const {
      val,
    } = this.state;
    const {
      user,
    } = this.props;
    return (
      <div>
        <div className="main">Index</div>
        <input value={val} onChange={this.onInputChange} />
        <button type="button" onClick={this.onSearch}>Search</button>
        <div>{JSON.stringify(user)}</div>
      </div>
    );
  }
}

module.exports = Index;
