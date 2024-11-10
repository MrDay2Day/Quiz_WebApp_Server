import { useEffect, useState } from "react";
import "./App.css";
import Quiz from "./pages/quiz";
import LeaderBoard from "./pages/leaderboard";
import Admin from "./pages/admin";
import FullscreenDemo from "./pages/fullScreen";

const useQueryParams = () => {
  return new URLSearchParams(window.location.search);
};

function App() {
  const queryParams = useQueryParams();

  // Get a specific query parameter, e.g., 'id'
  const isAdmin = queryParams.get("isAdmin");
  const [page, setPage] = useState("0");

  useEffect(() => {
    console.log({ isAdmin });
    if (isAdmin && isAdmin === "yes") {
      setPage("2");
    }
  }, []);

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
            <LeaderBoard admin={false} />
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
        {/* <button
          style={{
            right: 180,
            position: "absolute",
            padding: 8,
            width: 40,
            bottom: 45,
            // opacity: 0,
          }}
          onClick={() => setPage("2")}
        >
          A
        </button> */}
        <div style={{ minWidth: 300, height: 600 }}>
          <Choose />
        </div>
      </FullscreenDemo>
    </>
  );
}

export default App;
