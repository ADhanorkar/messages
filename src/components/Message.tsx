import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import MessageBox from "./MessageBox";
import MessageIcon from "@mui/icons-material/Message";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface MessageProps {
  message: string;
  index: number;
  deleteMessage: (index: number) => void;
}

const Message = ({ message, index, deleteMessage }: MessageProps) => {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      <MessageBox sx={{ my: 1, mx: "auto", p: 2 }}>
        <Stack spacing={2} direction={"row"} alignItems={"center"}>
          <Grid container>
            <Grid item sm={1}>
              <Avatar>
                <MessageIcon />
              </Avatar>
            </Grid>
            <Grid item sm={10}>
              <Typography px={2}>{message}</Typography>
            </Grid>
            <Grid item sm={1}>
              <IconButton
                onClick={() => {
                  deleteMessage(index);
                }}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Stack>
      </MessageBox>
    </Box>
  );
};

export default Message;
