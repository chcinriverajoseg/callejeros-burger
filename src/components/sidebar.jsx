import React from 'react';

export const Sidebar = () => {
  // Aquí puedes conectar con socket.io para obtener los usuarios conectados
  const users = ['Usuario 1', 'Usuario 2']; // temporal

  return (
    <aside className="w-64 bg-gray-900 text-white p-4 hidden md:block">
      <h2 className="text-lg font-bold mb-4">Usuarios en línea</h2>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li key={index} className="bg-gray-800 p-2 rounded">
            {user}
          </li>
        ))}
      </ul>
    </aside>
  );
};
