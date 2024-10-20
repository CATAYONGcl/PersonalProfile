import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import SubmissionSuccess from './Components/SubmissionSuccess';
import Navigation from './Components/Navigation';

const App = () => {
  const [formData, setFormData] = useState(null);
  
  const handleSubmit = (data) =>{
    setFormData(data);

  };

  return(
    <Router>
      <div classname="container mt-4">
        <Navigation/>
        <Routes>
          <Route path="/"element={<Home/>} />
          <Route path="/about"element={<About/>} />
          <Route path="/skills"element={<Skills/>} />
          <Route path="/contact"element={<Contact onSubmit={handleSubmit} />} />
          <Route path="/submission-success"element={<SubmissionSuccess formData={formData} />} />
          </Routes>
          </div>
          </Router>
  );

};

export default App;