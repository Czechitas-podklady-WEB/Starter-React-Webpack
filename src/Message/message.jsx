import React from "react";
import "./style.css";

const Message = ({ sender, subject, time }) => {
  return (
    <div className="message">
      <div className="message__sender">{sender}</div>
      <div className="message__subject">{subject}</div>
      <div className="message__time">{time}</div>
    </div>
  );
};

export default Message;