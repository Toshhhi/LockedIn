import './App.css'
import Home from './pages/Home'
import Login from './pages/LoginPage'
import CreateProfile from './pages/CreateProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-profile" element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
