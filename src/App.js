import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Pages/HomePage/Home';
import Footer from './components/Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
