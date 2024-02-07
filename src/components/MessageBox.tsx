import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const MessageBox = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.primary,
  maxWidth: 500,
}));

export default MessageBox;
