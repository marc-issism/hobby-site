import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './css/main.css'

import Home from './pages/Home.tsx';
import Photography from './pages/Photography.tsx';
import Transit from './pages/Transit.tsx';
import Languages from './pages/Languages.tsx';
import Coffee from './pages/Coffee.tsx';
import Gaming from './pages/Gaming.tsx';


function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/photography' element={<Photography/>}></Route>
          <Route path='/transit' element={<Transit/>}></Route>
          <Route path='/languages' element={<Languages/>}></Route>
          <Route path='/coffee' element={<Coffee/>}></Route>
          <Route path='/gaming' element={<Gaming/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
