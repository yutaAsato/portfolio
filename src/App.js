import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import { Home } from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <div className="container">
          <div className="wrapper">
            <div className="home"> */}
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/opportunities" component={Opportunities} />
          <Route exact path="/solutions" component={Solutions} />
          <Route exact path="/contact-us" component={Contact} />
        </Switch>
        {/* </div>
          </div>
        </div> */}
      </div>
    </Router>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

export default App;
