import { Route, Routes } from 'react-router-dom';
import Main from './Home/Main';
import Appointment from './Appointment/Appointment';
import Register from './Register/Register';
import Survey from './Survey/Survey';
import NotFound from './Commons/NotFound';
import '../styles/App.css';

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
