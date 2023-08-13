import Header from "./components/molecules/header/Header";
import Hero from "./components/molecules/hero/Hero";
import MainContent from "./components/organisms/mainContent/MainContent";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <MainContent />
      </main>
    </div>
  );
}

export default App;