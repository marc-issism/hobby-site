import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import './css/main.css'

import Home from './pages/Home.tsx';
import Photography from './pages/Photography.tsx';
import Transit from './pages/Transit.tsx';
import Languages from './pages/Languages.tsx';
import Coffee from './pages/Coffee.tsx';
import Gaming from './pages/Gaming.tsx';
import Navbar from './components/Navbar.tsx';


function AppContainer() {
  return(
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

function App() {
  return(
    <>
      <Router basename={"/hobby-site/"}>
        <Routes>
          <Route path='/' element={<AppContainer/>}> 
            <Route index element={<Home/>}/>
            <Route path='/photography' element={<Photography/>}/>
            <Route path='/transit' element={<Transit/>}/>
            <Route path='/languages' element={<Languages/>}/>
            <Route path='/coffee' element={<Coffee/>}/>
            <Route path='/gaming' element={<Gaming/>}/>

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
