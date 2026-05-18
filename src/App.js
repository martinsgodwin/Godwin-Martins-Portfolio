import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Your sections will go here */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Hey there! I'm Godwin Martins</h1>
            <p>Frontend Developer | Creative Problem Solver</p>
            <button className="cta-button">View My Work</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
