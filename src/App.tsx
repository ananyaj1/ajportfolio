import "@/App.css";
import Navbar from "./Navbar";
import Belt from "./Belt";

const App = () => {
  return (
    <div className="wrapper">
      <div className="landing">
        <Navbar />
        <div className="bio">
          <div className="name">ANANYA JOSHI.</div>
          <div className="subtitle">
            <div className="typewriter">
              <div className="typewrite">
                fullstack engineer bridging complex data and clean design
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Belt />
        </div>
      </div>
      <div className="timeline"></div>
    </div>
  );
};

export default App;
