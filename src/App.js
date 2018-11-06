import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Header2 from './components/header_footer/Header2';
import Featured from './components/featured';
import Home from './screens/Home';
import JobBoard from './screens/JobBoard';


// class App extends Component {
//   render() {
//     return (
//       <div className="App" style={{ height:"1500px", background: 'white'}}>
//       <Header/>
//       <Featured/>
//       <Home/>
//       <JobBoard/>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <BrowserRouter>
        <div>
          <Header2>
        <Link className="nav-button" to="/">Home</Link>
        <Link className="nav-button" to="/jobBoard/">Job Board</Link>
        </Header2>

        <Route path="/" component={Home} />
        <Route path="/jobBoard/" component={JobBoard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
