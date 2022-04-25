import "./App.css";
import './components';
import Demo from './components/demo/Demo.js'
import {
  Navbar,
  Header,
  Features,

  Footer,
} from "./components";


function App() {
  return (
    <>
      <header className="navbar-bg">
        <Navbar />
      </header>
      <header className="navbar-bg">
      <header className="header-bg">
        <Header />
      </header>
<<<<<<< HEAD
      </header>
      <Features/> {/* data-aos="fade-up" /> */}
=======
      <Features/>
>>>>>>> ca3c8daa4d4d5ef387253b8cf9af0325b1fd0896
      {/* {/* <Download /> */}
      {/* <Subscribe /> */}
      {/* <Faq /> */}
      <Demo/>
      <Footer />
    </>
  );
}

export default App;
