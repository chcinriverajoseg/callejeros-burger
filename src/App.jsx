import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    if (room.trim() !== "") {
      setJoined(true);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground p-4 flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">Videollamada - Chacín</h1>

        {!joined ? (
          <Card className="w-full max-w-md">
            <CardContent className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nombre de la sala"
                className="px-4 py-2 border rounded-md"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
              <Button onClick={handleJoin}>Unirse a la sala</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="w-full max-w-4xl">
            {/* Aquí irá la interfaz de videollamada */}
            <p className="text-lg">Conectado a la sala: <strong>{room}</strong></p>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
