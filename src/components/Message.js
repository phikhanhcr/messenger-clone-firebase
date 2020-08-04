import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import  "./Message.css"

const Message = forwardRef(({message , username} , ref) => {
  const isCurrentUser = message.username === username;
  return (
    <div ref={ref} className={`message ${isCurrentUser && 'message__user'}`}>
      <p className="username">{message.username}</p>
      <Card className={isCurrentUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
         
          <Typography
            color="white"
            variant="h5"
            component="h2"
          >
           {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});


export default Message;