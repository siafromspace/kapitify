import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import "./font/BR Firma Medium.otf"
import "./font/BR Firma Bold.otf"
import "./font/BR Firma SemiBold.otf"
import "./font/BR Firma Light.otf"
import "./font/BR Firma Regular.otf"

function App() {
  return (
    <div className="w-screen h-screen bg-off-white overflow-x-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
