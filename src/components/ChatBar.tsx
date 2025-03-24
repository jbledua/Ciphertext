import React from "react";
import Styles from "./Chat.module.css";
import "../Global.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  chats: Array<{ chatName: string }>;
  openChat: number;
  setOpenChat: (index: number) => void;
  leaveChat: (index: number) => void;
  setPopups: (popups: {
    create: boolean;
    join: boolean;
    link: boolean;
    newChat: boolean;
  }) => void;
}

const ChatBar = ({
  chats,
  openChat,
  setOpenChat,
  leaveChat,
  setPopups,
}: Props) => {
  return (
    <div>
      {chats.map((chat, index) => (
        <div
          key={index}
          className={`${Styles.textContainer} ${openChat === index ? Styles.active : ""}`}
          onClick={() => setOpenChat(index)}
        >
          <span>{chat.chatName}</span>
          <div
            className={Styles.closeTextContainer}
            onClick={(e) => {
              e.stopPropagation(); 
              leaveChat(index);
            }}
            role="button"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      ))}
      <button
        className={Styles.addTextContainer}
        onClick={() =>
          setPopups({ create: false, join: false, link: false, newChat: true })
        }
        type="button"
        aria-label="add"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default ChatBar;
