import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import StarBorder from "@mui/icons-material/StarBorder";
import DraftsIcon from "@mui/icons-material/Drafts";
import ListItem from "@mui/material/ListItem";
import { Button, Chip, Divider } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Box } from "@mui/system";
const adminItems = [
  { name: "Dashboard overview", icon: <StarBorder />, path: "/Admindash" },
  { name: "Manage Users", icon: <InboxIcon />, path: "/Button" },
  { name: "Manage Employers", icon: <InboxIcon />, path: "/Button" },
  { name: "Manage Posts", icon: <DraftsIcon />, path: "/jobseeker" },
  { name: "Manage Candidates", icon: <PeopleAltIcon />, path: "/cards" },
  { name: "Delete", icon: <PeopleAltIcon />, path: "/Button" },
  { name: "Settings", icon: <SettingsIcon /> },
  { name: "Help", icon: <ContactSupportIcon /> },
];

const userItems = [
  { name: "View Profile", icon: <InboxIcon /> },
  { name: "My Account", icon: <StarBorder /> },
  { name: "Manage Transactions", icon: <DraftsIcon /> },
];

export default function NestedList(props) {
  const [role, setRole] = React.useState("admin");
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [items, setItems] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (role === "admin") {
      setItems(adminItems);
    } else {
      setItems(userItems);
    }
  }, [role]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
    <List
      sx={{
        width: "300px",
        maxWidth: 360,
        bgcolor: "whitesmoke",
        minHeight: ["0vh", "100vh"],
        position:"fixed"
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            height: "80px",
          }}
        >
          JoLinker
        </ListSubheader>
      }
    >
      {items.map((item, index) => (
        <ListItemButton
          selected={selectedIndex === index && true}
          onClick={() => {
            setSelectedIndex(index);
            navigate(item.path);
          }}
        >
          <ListItemIcon sx={{ marginLeft: "24px", fontSize: "12px" }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.name} sx={{ fontSize: "12px" }} />
        </ListItemButton>
      ))}
  <List>
        <ListItemButton
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          
          }}
        >
          <Box
            sx={{
              width: "140px",
              height: "40px",
              fontSize: "18px",
              bgcolor: "black",
              color: "white",
              padding: " 8px",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            Logout
          </Box>
        </ListItemButton>
      </List>
 
    </List>
    <Divider/>
       
    </>
  );
}
