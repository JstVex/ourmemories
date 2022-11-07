import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages n components
import Memories from './pages/Memories';
import Navbar from './components/Navbar';
import Special from './pages/Special';
import Us from './pages/Us';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Us />}
            >

            </Route>
            <Route
              path="/memories"
              element={<Memories />}
            />
            <Route
              path='/special'
              element={<Special />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
