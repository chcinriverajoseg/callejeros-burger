// src/App.jsx
import React, { useState } from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { RoomJoin } from './components/RoomJoin';
import { CallRoom } from './components/CallRoom';
import { Chat } from './components/Chat';

function App() {
  const [room, setRoom] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (roomName) => {
    setRoom(roomName);
    setJoined(true);
  };

  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar />
        <main className="flex-1 p-4">
          <Header />
          {!joined ? (
            <RoomJoin onJoin={handleJoin} />
          ) : (
            <>
              <CallRoom room={room} />
              <Chat />
            </>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
