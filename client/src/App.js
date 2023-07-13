import "./App.css";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { CreateOutlined, ChatBubbleOutline } from '@mui/icons-material';
import ChatWindow from './components/ChatWindow';
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="icons">
          <ul>
            {/* create chat */}
            <li>
              <IconButton size="medium">
                <CreateOutlined fontSize="medium" />
              </IconButton>
            </li>
            {/* friends */}
            <li></li>
            {/* chats */}
            <li>
              <IconButton size="medium">
                <ChatBubbleOutline fontSize="medium" />
              </IconButton>
            </li>
            {/* notifications */}
            <li></li>
            {/* account/support */}
            <li></li>
            {/* toggle light/dark */}
            <li></li>
            {/* settings */}
            {/* <li><SettingOulined fontSize="medium" /></li> */}
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
