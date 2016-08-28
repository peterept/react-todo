/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/28/16.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';

class Dashboard extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Welcome!</h1>
        <p>Simple CRUD app</p>
        <p><Link to="/todos" className="btn btn-primary btn-lg"  role="button">Go to App</Link></p>
      </div>
    )
  }
}

export default Dashboard;