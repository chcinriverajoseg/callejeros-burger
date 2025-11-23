import React from 'react';

export const CallRoom = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 p-4 hidden md:block">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Usuarios en línea</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>Usuario 1</li>
          <li>Usuario 2</li>
          {/* Aquí irán los usuarios conectados dinámicamente */}
        </ul>
      </aside>

      {/* Área principal: videos y chat */}
      <main className="flex flex-col flex-grow">
        {/* Videos */}
        <section className="flex flex-grow bg-black p-4 gap-4">
          <video
            className="bg-gray-700 rounded-md w-1/2"
            autoPlay
            muted
            playsInline
            // ref={localVideoRef} por ejemplo para la cámara local
          />
          <video
            className="bg-gray-700 rounded-md w-1/2"
            autoPlay
            playsInline
            // ref={remoteVideoRef} para cámara remota
          />
        </section>

        {/* Chat y controles */}
        <section className="bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 p-4 flex items-center space-x-4">
          {/* Controles */}
          <div className="flex space-x-3">
            <button
              className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition"
              title="Colgar llamada"
            >
              {/* Icono de colgar (simple) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 5.636l-1.414 1.414M6 12h.01M12 6v.01M5.636 18.364l1.414-1.414M16.95 16.95l1.414-1.414"
                />
              </svg>
            </button>

            <button
              className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full hover:bg-gray-400 dark:hover:bg-gray-600 transition"
              title="Silenciar micrófono"
            >
              {/* Icono micrófono */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 1v11m0 0a3 3 0 003 3 3 3 0 01-3 3m0-6v6m-3-3h6"
                />
              </svg>
            </button>

            <button
              className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full hover:bg-gray-400 dark:hover:bg-gray-600 transition"
              title="Compartir pantalla"
            >
              {/* Icono compartir pantalla */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-4.553a1.414 1.414 0 10-2-2L13 8m-1 8v4m0 0H9m3 0h3"
                />
              </svg>
            </button>
          </div>

          {/* Input chat */}
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            className="flex-grow p-2 border rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          />
        </section>
      </main>
    </div>
  );
};
