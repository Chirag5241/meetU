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
        <Navbar/>
      </header>
      <header className="navbar-bg">
      <header className="header-bg">
        <Header/>
      </header>
      </header>
      <Features/>
      {/* {/* <Download /> */}
      {/* <Subscribe /> */}
      {/* <Faq /> */}
      <Demo/>
      <Footer />
    </>
  );
}

export default App;
