import { Box, Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";

interface AddMessageProps {
  addMessage: (message: string) => void;
}

const AddMessage = ({ addMessage }: AddMessageProps) => {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const msg = event.target.value;
    setMessage(msg);
  };

  const handleClick = () => {
    if (!message) {
      alert("Please enter message!!!");
    } else {
      addMessage(message);
      setMessage("");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto" }}>
      <TextField
        id={"enter-message"}
        value={message}
        label={"Enter Message"}
        sx={{ width: "70%" }}
        onChange={handleChange}
      />
      <Button variant="contained" sx={{ ml: 2, p: 2 }} onClick={handleClick}>
        Send
      </Button>
    </Box>
  );
};

export default AddMessage;
