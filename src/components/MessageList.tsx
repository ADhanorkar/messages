import React from "react";
import Message from "./Message";
import { Box } from "@mui/material";

interface MessageListProps {
  messages: string[];
  deleteMessage: (index: number) => void;
}

const MessageList = ({ messages, deleteMessage }: MessageListProps) => {
  return (
    <Box sx={{ py: 3 }}>
      {messages.map((message, index) => (
        <Message
          key={index}
          index={index}
          message={message}
          deleteMessage={deleteMessage}
        />
      ))}
    </Box>
  );
};

export default MessageList;
