import React, { useState, useEffect } from 'react';
import { Button, InputLabel, FormControl, Input } from '@material-ui/core';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';

import './App.css';
import Message from './components/Message';
import db from './firebase';

function App() {
  const [input, setInput] = useState("");
  const [messenger, setMessenger] = useState([])
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(prompt("Enter your name!"))
  }, [])
  useEffect(() => {
    db.collection("messages")
      .orderBy('timestamp', 'asc')
      .onSnapshot(snap => {
        setMessenger(snap.docs.map(doc => ({ id: doc.id, data: doc.data() })))
      })
  }, [])
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App container">
      <h1>Messenger Firebase Clone</h1>

      {
        messenger.length && messenger.map(({ id, data }) =>
          <Message key={id} message={data} username={username} />
        )
      }



      <form className="form">
        <FormControl className="app_formControl">
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} autoFocus />
          <Button variant="contained" disabled={!input} type="submit" onClick={sendMessage} color="primary"> Send </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
