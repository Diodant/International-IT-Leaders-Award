import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import AboutUs from './components/AboutUs';
import Documents from './components/Documents';
import Regulations from './components/Regulations';
import EvaluationCriteria from './components/EvaluationCriteria';
import Jury from './components/Jury';
import Winners from './components/Winners';
// import Medal from './components/Medal';
// import Articles from './components/Articles/Articles';
// import ArticlesPage from './components/Articles/ArticlePage';
// import Form from './components/Form';
// import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <Navigation />

        <Routes>
        
        <Route path="/" element={<MainContent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/jury" element={<Jury />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/regulations" element={<Regulations />} />
        <Route path="/evaluation-criteria" element={<EvaluationCriteria />} />
        {/* 
        
        
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticlesPage />} />
        <Route path="/statute" element={<Statute />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/medal" element={<Medal />} />
        <Route path="/form" element={<Form />} />
        <Route path="/statutepage" element={<StatutePage />} />
        <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>

      <Footer />
    </Router>
  );
}

export default App;
