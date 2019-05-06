import React, { Component } from 'react';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail/loadable.js';
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter,Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
        <Provider store={store}>
              <BrowserRouter>
                  <div>
                      <Header />
                      <Route path="/" exact component={Home} ></Route>
                      <Route path="/detail/:id" exact component={Detail} ></Route>
                      <Route path="/login" exact component={Login} ></Route>
                  </div>
              </BrowserRouter>
        </Provider>

    );
  }
}

export default App;
