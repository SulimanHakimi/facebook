import { Routes, Route } from 'react-router-dom';
import FacebookLogin from './pages/facebook';
import GoogleLogin from './pages/google';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FacebookLogin />} />
      <Route path="/facebook" element={<FacebookLogin />} />
      <Route path="/google" element={<GoogleLogin />} />
    </Routes>
  );
}

export default App;
