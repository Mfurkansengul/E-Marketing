import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route} from 'react-router';
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Products from './Pages/Products';
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/signin' component={SignIn}></Route>
        <Route exact path='/products' component={Products}></Route>
      </Switch>

    </div>
  );
} 

export default App;