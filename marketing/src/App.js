import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route} from 'react-router';
import Home from './Home'
import SignIn from './SignIn'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/signin' component={SignIn}></Route>
      </Switch>

    </div>
  );
} 

export default App;