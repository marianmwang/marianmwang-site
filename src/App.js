import './App.css';
import React from 'react';
import Projects from './pages/projects.jsx';
import Layout from './pages/layout.jsx';
import About from './pages/about.jsx';
import Gallery from './pages/gallery.jsx';

function App() {
  return (
    <Layout>
      <About />
      <Projects />
      <Gallery />
    </Layout>
  );
}

export default App;
