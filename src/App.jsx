import "./App.css";
import EventContextProvider from "./context/EventContext";

function App() {
  return (
    <EventContextProvider>
      <div className="App">
        <h1>React App</h1>
      </div>
    </EventContextProvider>
  );
}

export default App;
