import React from "react";

export const ChatReciever = () => {
  return (
    <p className="chat_reciever chat_message">
      <span className="chat_name">Ketul</span>
      This can be a message
      <span className="chat_timestamp">{new Date().toUTCString()}</span>
    </p>
  );
};
