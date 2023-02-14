import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { Home } from './Pages/Home';
import {Profile} from './Pages/Profile';
import {Contacts} from './Pages/Contacts';
import { NavBar } from './NavBar';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="*" element={<h1>Page not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;