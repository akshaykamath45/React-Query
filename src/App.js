import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { Home } from './Pages/Home';
import {Profile} from './Pages/Profile';
import {Contacts} from './Pages/Contacts';
import { NavBar } from './NavBar';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

function App() {
  
  const client=new QueryClient({
    defaultOptions:{
       queries:{
          refetchOnWindowFocus:false
       }
    }
  });
  // Queries is just the READ from CRUD.
  // Mutations is CUD from CRUD.
  
  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="*" element={<h1>Page not Found</h1>}/>
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;