import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './main';
import LoginSignup from './LoginSignup';
import ImageUpload from './ImageUpload'; // Import your Image Upload component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/image-upload" element={<ImageUpload />} /> {/* Image Upload route */}
      </Routes>
    </Router>
  );
};

export default App;
