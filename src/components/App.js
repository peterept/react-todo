/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

import React, {Component} from 'react';

// Components
import Header from './common/header/Header';
import Dashboard from './dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
