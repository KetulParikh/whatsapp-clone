import React from "react";
import "./Chat.css";

import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";

export const Header = () => {
  return (
    <div className="chat_header">
      <Avatar src="https://i.pinimg.com/originals/b7/db/89/b7db8973bcb9ee5ffb8537ca0a98832b.jpg" />
      <div className="chat_header_info">
        <h3>Room name</h3>
        <p>Last seen at...</p>
      </div>
      <div className="chat_header_right">
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
    </div>
  );
};
