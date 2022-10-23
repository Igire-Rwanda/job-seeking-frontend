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
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
const adminItems = [
  { name: "Dashboard overview", icon:  <StarBorder /> ,path:'/Admindash'},
  { name: "Manage Users", icon: <InboxIcon /> ,path:'/managerUser'},
  { name: "Manage Candidates", icon:  <PeopleAltIcon /> ,path:'/cards'},
  { name: "Manage Post", icon:  <DraftsIcon /> },
  { name: "Manage Employers", icon: <InboxIcon /> },
  
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
        sx={{ display:'flex',justifyContent:'center', alignItems:'center',fontSize:'18px'}}>
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
        <ListItemIcon  sx={{ marginLeft:'24px',fontSize:'12px'}}>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.name}/>
      </ListItemButton>
      ))}
        <Divider />
        <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon sx={{paddingLeft:'40px', paddingRight:'10px'}}>
              <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ fontSize:'18px'}}/>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemIcon sx={{paddingLeft:'60px'}}>
            <ContactSupportIcon />
            </ListItemIcon>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Help" sx={{fontSize:'18px'}}/>
            </ListItemButton> <br/>
          </ListItem>
          <ListItemButton sx={{ display:'flex',justifyContent:'center', alignItems:'center',margin:'20px'}}>
          <Button sx={{fontSize:'18px', bgcolor:'#44B4D2' ,color:'white', padding:'4px 24px'}}>
            Logout</Button>
          </ListItemButton>
        </List>
        </List>
     
  );
}
