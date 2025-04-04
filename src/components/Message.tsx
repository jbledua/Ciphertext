import React from "react";
import "../Global.module.css";
import styles from "./Message.module.css"; // Assuming this is the path to your CSS module

interface MessageProps {
  senderName: string;
  children: React.ReactNode;
  isSender?: boolean; // Make isSender optional if not all parent components will pass it
  isValid: boolean
}

const Message = ({ children, senderName, isSender, isValid }: MessageProps) => {
  return (
    <div className={styles.messageContainer}>
      <div className={(isSender ? styles.sentMessage : styles.receivedMessage) + " " + (!isValid ? styles.invalidMessage : "")}>
        <div className={styles.senderName}>{senderName}</div>
        {children}
      </div>
    </div>
  );
};

export default Message;
