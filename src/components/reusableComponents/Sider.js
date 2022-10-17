import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import StarBorder from "@mui/icons-material/StarBorder";
import DraftsIcon from "@mui/icons-material/Drafts";
import ListItem from '@mui/material/ListItem';
import { Button } from '@mui/material';


const adminItems = [
  { name: "Manage Users", icon: <InboxIcon /> ,path:'/managerUser'},
  { name: "Manage Client", icon:  <StarBorder /> ,path:'/cards'},
  { name: "Manage Products", icon:  <DraftsIcon /> },
  { name: "Manage Students", icon: <InboxIcon /> },
  { name: "Manage Customers", icon:  <StarBorder /> },
];



const userItems = [
  { name: "View Profile", icon: <InboxIcon /> },
  { name: "My Account", icon:  <StarBorder /> },
  { name: "Manage Transactions", icon: <DraftsIcon /> }
];




export default function NestedList(props) {
  const [role,setRole] = React.useState("admin");
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [items,setItems] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(()=>{
    if(role==="admin"){
      setItems(adminItems);
    }else{
      setItems(userItems);
    }
  },[role])






  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'whitesmoke', minHeight: ["0vh", "100vh"]}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader"
       >
         Dashboard
        </ListSubheader>
      }
    > 
     {items.map((item, index) =>(<ListItemButton  
     selected={selectedIndex === index && true}
     onClick={() => {
        setSelectedIndex(index);
        navigate (item.path);
     }}
    >
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.name}/>
      </ListItemButton>
      ))}
        <Divider />
        <List>
          <ListItem >
            <ListItemButton>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
          <Button>Logout</Button>
        </List>
        </List>
     
  );
}
