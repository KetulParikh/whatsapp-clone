import React from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatReciever } from "./ChatReciever";

export const ChatBody = () => {
  return (
    <div className="chat_body">
      <ChatMessage />
      <ChatReciever />
    </div>
  );
};
