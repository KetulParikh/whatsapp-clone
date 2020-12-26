import React from "react";

export const ChatMessage = () => {
  return (
    <p className="chat_message">
      <span className="chat_name">Ketul</span>
      This can be a message
      <span className="chat_timestamp">{new Date().toUTCString()}</span>
    </p>
  );
};
