import "./styles/app.css"
import Header from "./components/Header";
import FirstScreen from "./components/FirstScreen";
import AboutMe from "./components/AboutMe";
import SeparateLine from "./components/SeparateLine";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects";
function App() {
  return (
      <div className="app">
          <Header/>
          <SeparateLine id={0} visible={false}/>
          <FirstScreen/>
          <SeparateLine id={1} visible={true}/>
          <AboutMe/>
          <SeparateLine id={2} visible={true}/>
          <Experience/>
          <SeparateLine id={3} visible={true}/>
          <Projects/>
          <SeparateLine id={4} visible={true}/>
          <AboutMe/>
          <SeparateLine/>
      </div>
  );
}

export default App;
