import React, { Component } from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Header from './components/layout/Header';
import FullMoonCalc from './components/FullMoonCalc';
import './App.css'



class App extends Component {

  // Default full moon age
  state={
    fullMoonYears: 1
  }

  // calculating users full moon age by multiplying by 12
  fullMoonCalc =(age) => {
    console.log(age);

    this.setState({fullMoonYears: age*12});

  }

  render() {
    return (
      <Router>
        <div className="container">
          {/* Header */}
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              {/* Moon image */}
              <div className="picContainer">
              <img src={'http://pngimg.com/uploads/moon/moon_PNG52.png'} alt="moon"></img>
              </div>
              {/* the age input */}
              <FullMoonCalc fullMoonCalc={this.fullMoonCalc}/>
              {/* The result */}
              <div className="result">
                <h2>Age in full moons:  {this.state.fullMoonYears}</h2>
              </div>
              <br/>
              <p>&copy; Martin Gras 2019</p>
            </React.Fragment>
          )} />
          
        </div>
      </Router>

    )
  }
}

export default App
