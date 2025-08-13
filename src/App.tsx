import "./styles/_main.scss";
import Header from "./components/Header";
import Body from "./components/Body";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
        <Stats />
        <Footer />
      </div>
    </>
  );
}

export default App;
