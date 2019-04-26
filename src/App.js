import React, { Component } from 'react';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter,Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
              <BrowserRouter>
                  <div>
                      <Header />
                      <Route path="/" exact component={Home} ></Route>
                      <Route path="/detail" exact component={Detail} ></Route>
                  </div>
              </BrowserRouter>
          </div>
        </Provider>

    );
  }
}

export default App;
