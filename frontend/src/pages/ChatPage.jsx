import { useState } from "react";
import "../styles/ChatPage.css";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { text: "Hi 👋 I am your financial AI assistant", sender: "bot" }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    setMessages([
      ...messages,
      { text: input, sender: "user" },
      { text: "You should consider starting SIP 📈", sender: "bot" }
    ]);

    setInput("");
  };

  return (
    <div className="chat-container">

      <div className="chat-header">
        AI Navigator
      </div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message ${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
};

export default ChatPage;