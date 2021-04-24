import "./App.css";
import Search from "./Search";

import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="container">
      <Search defaultCity="Catania" />
      <Footer />
    </div>
  );
}
