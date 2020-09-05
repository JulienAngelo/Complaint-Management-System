import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "bootstrap/dist/css/bootstrap-reboot.min.css"
import Sidenav from "./components/navbar-vertical.component.jsx"
import Navbar from "./components/navbar.component.jsx"
import ComplainsList from "./components/complains-list.component"
import EditComplain from "./components/edit-complain.component"
import CreateComplain from "./components/create-complain.component"
import CreateUser from "./components/create-user.component"
import CreateAppeal from "./components/create-appeal.component"
import { Helmet } from "react-helmet";
import Police from './police.png'

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Police Station</title>
        <meta name="description" content="Police Station" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="shortcut icon" href={Police} />
      </Helmet>
      <div id="content">
        <Router>
          <div>
            <Navbar />
            <Sidenav />

            <div className="container" style={{ marginTop: -67 + 'rem' }} >
              <Route exact path="/" exact component={ComplainsList} />
              <Route path="/edit/:id" exact component={EditComplain} />
<<<<<<< HEAD
              <Route path="/Complain" exact component={CreateComplain} />
=======
              <Route path="/complain" exact component={CreateComplain} />
>>>>>>> 153a6dbeb4d56d1c417d51d132dc327be73beb13
              <Route path="/user" exact component={CreateUser} />
              <Route path="/Appeal" exact component={CreateAppeal} />

            </div>
          </div>

        </Router>
      </div>
    </div>
  );
}

export default App;
