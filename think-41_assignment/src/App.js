import Player from "./Components/Player";
import "./App.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        width: "100vw",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Player />
    </div>
  );
}

export default App;
