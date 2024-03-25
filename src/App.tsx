import React, { useState } from "react";
import MessageList from "./components/MessageList";
import AddMessage from "./components/AddMessage";
import { Box } from "@mui/material";

function App() {
  const [messages, setMessages] = useState([
    "Learning React.",
    "React is declarative component based library.",
    "It is very easy library.",
    "The virtual DOM feature is awesome",
  ]);

  const addMessage = (message: string) => {
    setMessages((prevMessages) => [message, ...prevMessages]);
  };

  const deleteMessage = (index: number) => {
    const msgs = [...messages];
    msgs.splice(index, 1);
    setMessages(msgs);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: "hidden",
        px: 3,
        pt: 3,
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <h1>Message Board</h1>
      <AddMessage addMessage={addMessage} />
      <MessageList messages={messages} deleteMessage={deleteMessage} />
    </Box>
  );
}

export default App;
