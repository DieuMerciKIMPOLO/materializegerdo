import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from 'react-router-dom';
import Presentation from './components/Presentation';
import Login from './components/Login';
import Inscrire from './components/Inscrire';
import ListeInscrits from './components/ListeInscrits';
import Profil from './components/Profil';
import Faq from './components/Faq'
import Inscription from './components/Inscription';
class App extends React.Component{
  render(){
      return(
        <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Presentation}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/inscrire' component={Inscrire}/>
              <Route exact path='/admin' component={ListeInscrits}/>
              <Route exact path='/profil' component={Profil}/>
              <Route exact path='/inscription' component={Inscription}/>
              <Route exact path='/faq' component={Faq}/>
          </Switch>
        </div>
      </Router>
      )
  }
}
export default App;
