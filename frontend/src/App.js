import "./App.css";
import Homepage from "./pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./pages/Chatpage";

function App() {
  return (
    <div className="App">
      {/* Route for the Homepage component */}
      <Route path="/" component={Homepage} exact />
      {/* Route for the Chatpage component */}
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
