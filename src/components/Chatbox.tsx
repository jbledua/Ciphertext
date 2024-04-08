import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { sendMessage } from "../handlers";
import { user } from "../types";
import "../Global.module.css";
import Styles from "../buttonText.module.css"
import InputStyles from "./Chat.module.css"

interface Props {
  chatId: string;
  user: user | undefined
  showLink: () => void;
}

const Chatbox = ({ user, chatId, showLink }: Props) => {
  const [msg, setMsg] = useState<string>("");
  const [file, setFile] = useState<File>();

   // Function to simulate clicking the hidden file input
   const triggerFileInput = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput?.click();
  };

  return (
    <form
      className={InputStyles.chatboxContainer}
      onSubmit={(e) => {
        e.preventDefault();
        if(!user) return
        sendMessage(chatId, user, msg, file, );
        setMsg("");
        setFile(undefined);
        e.currentTarget.reset();
      }}
    >
      <input style={{fontSize: '20px', fontFamily: 'Oswald'}}
        type="text"
        placeholder="Type a message"
        className="chatbox-input"
        name="message text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      ></input>
      <input
        id='fileInput'
        type="file"
        className={InputStyles.fileInput}
        onChange={(e) => {
          if (!e.target.files) return;
          const file = e.target.files[0];
          setFile(file);
        }}
      />
      <button type='button' className={InputStyles.iconButton} onClick={triggerFileInput}>
      <FontAwesomeIcon icon={faPaperclip} />
      </button>
      <button className={InputStyles.sendButton} type="submit">
        Send Message
      </button>
      <button type="button" className={InputStyles.inviteButton} onClick={showLink}>Invite People</button>
    </form>
    
  );
};

export default Chatbox;