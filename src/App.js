import Home from "./Home";
import { Link } from "react-router-dom";

function App() {
  return (
    
    <div className="container">
        
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/about">About Us</Link> |{" "}
        <Link to="/contact">Contanct</Link>
      </nav>
      <Home />
    </div>
   
  );
}

export default App;
