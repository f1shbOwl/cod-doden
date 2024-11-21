import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Graveyard from './routes/Graveyard';


export default function App() {
  return (
      <>
          <Header />

          <div className={`main-body`}>
              <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/graveyard' element={<Graveyard />} />
              </Routes>
          </div>
      </>
  );
};
