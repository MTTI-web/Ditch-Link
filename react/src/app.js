import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { Pet } from './Pet';
import SearchParams from './searchParams';
import { Router, Link } from '@reach/router';
import Details from './deatils';


const App = () => {
  return (
    <div>
      <header>
      <Link to="/">
        Adopt Me!
      </Link>
      </header>
      <Router>
        <SearchParams path="/"/>
        <Details path="/details/:id" />
        {/* <h1 path="">Not Found</h1> */}
      </Router>
    </div>
  );
};
ReactDOM.render(<App/>, document.getElementById("root"));
