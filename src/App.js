import logo from './logo.svg';
import './App.css';
import Projects from './pages/projects.jsx';
import Layout from './pages/layout.jsx';
import About from './pages/about.jsx';
import Gallery from './pages/gallery.jsx';

function App() {
  return (
    <Layout>
      <About id="about"></About>
      <Projects id="projects"></Projects>
      <Gallery></Gallery>
    </Layout>
  );
}

export default App;
