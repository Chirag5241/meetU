import "./App.css";

import {
  Navbar,
  Header,
  Features,
  Download,
  Subscribe,
  Faq,
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
      </header>
      <Features/> {/* data-aos="fade-up" /> */}
      {/* <Download />
      <Subscribe />
      <Faq /> */}
      <Footer />
    </>
  );
}

export default App;
