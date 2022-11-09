import "./styles/app.css"
import Header from "./components/Header";
import FirstScreen from "./components/FirstScreen";
import AboutMe from "./components/AboutMe";
import SeparateLine from "./components/SeparateLine";
import Experience from "./components/Experience/Experience";
function App() {
  return (
      <div className="app">
          <Header/>
          <FirstScreen/>
          <SeparateLine/>
          <AboutMe/>
          <SeparateLine/>
          <Experience/>
          <SeparateLine/>
      </div>
  );
}

export default App;
