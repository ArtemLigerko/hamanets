import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Home />
      </header>
    </div>
  );
};

export default App;
