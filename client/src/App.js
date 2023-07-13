import ChatWindow from './components/ChatWindow'
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="icons">
          <ul>
            {/* create chat */}
            <li></li>
            {/* friends */}
            <li></li>
            {/* chats */}
            <li></li>
            {/* notifications */}
            <li></li>
            {/* account/support */}
            <li></li>
            {/* toggle light/dark */}
            <li></li>
            {/* settings */}
            <li></li>
          </ul>
        </div>
      </div>
      <div className="aside">

      </div>
      <div className="main">
      <Container>
        <ChatWindow />
      </Container>
      </div>
    </div>
  );
}

export default App;
