import Player from "./components/Player.jsx";
import TimerChallenger from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenger title="roblox" targetTime={1} />
        <TimerChallenger title="mid" targetTime={5} />
        <TimerChallenger title="hard" targetTime={10} />
        <TimerChallenger title="souls like" targetTime={15} />
      </div>
    </>
  );
}

export default App;
