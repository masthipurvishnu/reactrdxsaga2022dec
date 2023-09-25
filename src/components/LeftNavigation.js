import { List, ListItem, ListItemText, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LeftNavigation = () => {
  return (
    <Paper elevation={3}>
      LeftNavigation
      <List>
        <ListItem button components={<Link />} to={"/shop"}>
          <a href="/shop">
            <ListItemText primary={"link1"} />
          </a>
        </ListItem>
        <ListItem>
          <ListItemText primary={"link2"} />
        </ListItem>
        <ListItem>
          <ListItemText primary={"link3"} />
        </ListItem>
      </List>
    </Paper>
  );
};

export default LeftNavigation;
