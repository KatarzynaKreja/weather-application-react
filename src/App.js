import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div classeName="App">
      <div className="container" id="app">
        <Search defaultCity="Biancavilla" />
        <Footer />
      </div>
    </div>
  );
}
