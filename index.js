import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/posts_item';
import NotFound from './components/404';

class App extends Component {
  render() {
    return(
      <div>Home</div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
      <div>
          <header>
            <NavLink to="/" activeStyle={{color:'red'}}>Home</NavLink><br />
            <NavLink to="/posts">Posts</NavLink><br />
            <NavLink to="/profile">Profile</NavLink><br />
            <hr />
          </header>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/posts" component={Posts} />
            <Route path="/profile" component={Profile} />
            <Route path="/posts/:id" component={PostsItem} />
            <Route path="*" component={NotFound} />
          </Switch>
      </div>
  </BrowserRouter>
    , document.querySelector('.container'));
