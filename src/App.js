import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';


const App = () => {
  return (
    <div>
      <Router>
          <Routes>
             <Route exact path='/' element={< Home />}></Route>
             <Route exact path='/about' element= {<About />}></Route>
             <Route exact path='/contact' element= {<Contact />}></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App;
