import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Home/Main';
import Appointment from './components/Appointment/Appointment';
import Register from './components/Register/Register';
import Survey from './components/Survey/Survey';
import NotFound from './components/Commons/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
