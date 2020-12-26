import React from "react";
import "./Chat.css";
import { Header } from "./Header";
import { ChatBody } from "./ChatBody";

import { InsertEmoticon, Mic } from "@material-ui/icons";

export const Chat = () => {
  return (
    <div className="chat">
      {/* Chat header section */}
      <Header />
      {/* Chat body section */}
      <ChatBody />
      {/* Chat footer section */}
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
};
