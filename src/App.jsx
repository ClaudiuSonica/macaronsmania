import Header from "./components/molecules/header/Header";
import Hero from "./components/molecules/hero/Hero";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="vector"></div>
    </div>
  );
}

export default App;