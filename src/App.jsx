
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Features from './Pages/Features/Features';
import Services from './Pages/Services/Services';
import Request from './Pages/Request/Request';
import Rules from './Pages/Rules/Rules';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/request" element={<Request/>} />
          <Route path="/rules" element={<Rules/>} />
        </Route>
      </Routes>
    </Router>
  );
}