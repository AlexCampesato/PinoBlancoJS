
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <div className='desktop-container'>
          <Routes>
            <Route 
              path="/"
              element={<ItemListContainer />}
            />
            <Route
              path="/producto"
              element={ <ItemDetailContainer />}
            />
          </Routes>
        </div>
      </main>

    </div>

  </BrowserRouter>);
}

export default App;
