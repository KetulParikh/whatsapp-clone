import React from "react";

import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export const Header = () => {
  return (
    <div className="sidebar_header">
      <Avatar src="https://i.pinimg.com/originals/b7/db/89/b7db8973bcb9ee5ffb8537ca0a98832b.jpg" />
      <div className="sidebar_header_right">
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};
