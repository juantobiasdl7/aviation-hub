import React from 'react';
import { Login } from './Components/Login.js';
import { Signup } from './Components/Signup.js';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
import TypeWriterEffect from 'react-typewriter-effect';
import Logo from './Media/proximo.png';



function App() {
  return (
    <Router>
      <MDBContainer fluid>
        <div className="row row-cols-2 d-flex align-items-center " style={{height: "100vh" }}>

          <div className="col bg-dark d-flex shadow-lg align-items-center justify-content-center text-white" style={{height: "100vh" }}>
            <TypeWriterEffect
              textStyle={{ fontFamily: 'Red Hat Display',
              fontSize: '1.5em' }}
              startDelay={100}
              cursorColor="white"
              text="Welcome to Aviation Hub, explore new jobs..."
              typeSpeed={100}
              
            />
            <img src={Logo} height="60" style={{filter: "invert(100%)"}}/>
          </div>

          <div className="col">
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route path="/signup">
                  <Signup/>                                  
                </Route>
              </Switch>
          </div>

        </div>
      </MDBContainer>
    </Router>
  );
}

export default App;
