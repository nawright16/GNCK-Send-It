import "./App.css";
import * as React from 'react';

import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider} from "@mui/material";
import ChatWindow from './components/ChatWindow';
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      
      <div className="aside">
        <div>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {/* <ImageIcon /> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {/* <WorkIcon /> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {/* <BeachAccessIcon /> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
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
