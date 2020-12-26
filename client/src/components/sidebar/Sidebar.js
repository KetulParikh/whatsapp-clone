import React from "react";
import "./Sidebar.css";
import { Header } from "./Header";
import { SidebarChat } from "./SidebarChat";

import { SearchOutlined } from "@material-ui/icons";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar header section */}
      <Header />

      {/* Sidebar search section */}
      <div className="sidebar_search">
        <div className="sidebar_search_container">
          <SearchOutlined />
          <input placeholder="Search or Start new chat" type="text" />
        </div>
      </div>

      {/* Sidebar chat section */}
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};
