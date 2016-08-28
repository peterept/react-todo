/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/28/16.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
// Components
import TodoRow from './TodoRow';

// Utils
import {httpUtil} from '../../utils';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      isFetchingTodos: false
    };
    this.fetchTodos = this.fetchTodos.bind(this);
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.setState({isFetchingTodos: true});
    httpUtil.get('todos').then((response) => {
      this.setState({todos: response.data.data, isFetchingTodos: false});
    }).catch((err) => {
      toastr.error(err.message)
    });
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Todo List</h1>
        </div>
        <Link to="/add" className="btn btn-primary pull-right">
          Add Item
        </Link>
        <div className="clearfix"></div>
        {/* Show a spinner until the request is complete then show the response */}
        {this.state.isFetchingTodos ?
          <div className="spinner center"></div>
          :
          <ul className="list-group">
            {this.state.todos.map((todo, index) => {
              return <TodoRow todo={todo} key={index} index={index} fetchTodos={this.fetchTodos}/>
            })}
          </ul>
        }
      </div>
    )
  }
}

export default TodoList;