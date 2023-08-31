import Companies from "./components/Companies/Companies";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import './index.css';
function App() {
  return (
    <div className="App">
     <div>
      <div className="white-gradient">
      <Header/>
      <Hero/>
      </div>
     </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contacts/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
