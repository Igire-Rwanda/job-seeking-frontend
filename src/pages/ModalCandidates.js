import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';

export default function ModalCandidates({ onClse }) {
  return (
    <div className="flex justify-between">

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Ali Connors" src="../components/Assets/images/lydiaProfile.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Ali Connors"
          />
        </ListItem>

        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Scott Alex" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Scott Alex"
          />
        </ListItem>

        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Cindy Baker"
          />
        </ListItem>
      </List>

      <div>

      </div>
      <CloseIcon style={{ width: 30, height: 30, cursor: "pointer", color:'rgba(57, 166, 234)' }} onClick={onClse} />
    </div>

  );
}