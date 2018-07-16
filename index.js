import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Posts from './components/posts';
import Profile from './components/profile';

class App extends Component {
  render() {
    return <div>Home</div>
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
