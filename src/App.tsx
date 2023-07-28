import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));

function App() {
  return (
    <Router>
      <div className="App">
        <div className="center">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              {/* Add more routes for other pages */}
            </Routes>
          </Suspense>
          <button onClick={() => alert('Button 1')}>Button 1</button>
        </div>
      </div>
    </Router>
  );
}

export default App;
