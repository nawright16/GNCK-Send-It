import "./App.css";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { CreateOutlined, ChatBubbleOutline, NotificationsOutlined, ViewComfyOutlined, SettingsOutlined } from '@mui/icons-material';
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
              <IconButton aria-label="create" color="pink" size="medium">
                <CreateOutlined fontSize="medium" />
              </IconButton>
            </li>
            {/* friends */}
            <li>

            </li>
            {/* chats */}
            <li>
              <IconButton size="medium">
                <ChatBubbleOutline fontSize="medium" />
              </IconButton>
            </li>
            {/* notifications */}
            <li> <IconButton size="medium">
              <NotificationsOutlined fontSize="medium" />
            </IconButton>
            </li>
            {/* account/support */}
            <li>
              <IconButton size="medium">
                <ViewComfyOutlined fontSize="medium" />
              </IconButton>
            </li>
            {/* toggle light/dark */}
            <li>

            </li>
            {/* settings */}
            <li>
              <IconButton size="medium">
                <SettingsOutlined fontSize="medium" />
              </IconButton>
            </li>
          </ul>
        </div>
      </div>
      <div className="aside">
        <div>
          
        </div>
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
