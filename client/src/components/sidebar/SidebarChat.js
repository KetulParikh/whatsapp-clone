import React from "react";
import "./SidebarChat.css";

import { Avatar } from "@material-ui/core";

export const SidebarChat = () => {
  return (
    <div className="sidebar_chat">
      <Avatar />
      <div className="sidebar_chat_info">
        <h2>Room Name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
};
