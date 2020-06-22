import React from "react";
import "./Styles/App.scss";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer/Footer";
import Banner from './Banner'
// import BestSeller from './BestSeller'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Banner />
        <div className="container-fluid">
          <div className="row">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
          {/* <BestSeller /> */}
          <hr />
          <div className="row footer-container mt-5">
            <Footer />
            <Footer />
            <Footer />
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
