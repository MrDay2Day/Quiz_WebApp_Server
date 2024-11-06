import { useState } from "react";
import "./App.css";
import Quiz from "./pages/quiz";
import LeaderBoard from "./pages/leaderboard";
import Admin from "./pages/admin";
import FullscreenDemo from "./pages/fullScreen";

function App() {
  const [page, setPage] = useState("0");

  function Choose() {
    switch (page) {
      case "0":
        return (
          <>
            <Quiz />
          </>
        );
        break;
      case "1":
        return (
          <>
            <LeaderBoard />
          </>
        );
        break;
      case "2":
        return (
          <>
            <Admin />
          </>
        );
        break;

      default:
        break;
    }
  }

  return (
    <>
      <FullscreenDemo>
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <button style={{ margin: 5 }} onClick={() => setPage("0")}>
            Quiz
          </button>
          <button style={{ margin: 5 }} onClick={() => setPage("1")}>
            Leader Board
          </button>
        </div>
        <button
          style={{
            right: 60,
            position: "absolute",
            padding: 8,
            width: 40,
            top: 5,
          }}
          onClick={() => setPage("2")}
        >
          A
        </button>
        <div style={{ minWidth: 300, height: 600 }}>
          <Choose />
        </div>
      </FullscreenDemo>
    </>
  );
}

export default App;
