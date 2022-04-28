import './App.css'
import { HeaderBar, HotelsDetailPage, CityPage, Payment } from './components';
import { HomePage } from './components/Pages/HomePage/home'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        
        <Route path='/hotels' element={<HotelsDetailPage />} />
        <Route path='/city' element={<CityPage />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/home' element={<HomePage />} />

      </Routes>



    </div>
  );
}

export default App;
