import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route} from 'react-router';
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'

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