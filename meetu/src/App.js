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
      <header className="header-bg">
        <Navbar />
        <Header />
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
