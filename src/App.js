import { BrowserRouter as Router } from 'react-router-dom';

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Main from './components/main/Main';
import "./App.scss";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
