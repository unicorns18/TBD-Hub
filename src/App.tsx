import { useState } from 'react';

function App() {
  const [isEmbyMaximized, setIsEmbyMaximized] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Sidebar */}
      <div className={`${isSidebarCollapsed ? 'w-16' : 'w-64'} bg-black/30 backdrop-blur-sm border-r border-white/10 p-4 transition-all duration-300`}>
        <div className="flex items-center justify-between mb-8">
          {!isSidebarCollapsed && <h1 className="text-2xl font-bold text-white">Desktop Hub</h1>}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors ml-auto"
          >
            {isSidebarCollapsed ? '→' : '←'}
          </button>
        </div>
        
        <nav className="space-y-2">
          <button 
            onClick={() => setIsEmbyMaximized(!isEmbyMaximized)}
            className={`w-full rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors ${
              isSidebarCollapsed ? 'flex items-center justify-center text-2xl leading-none h-12' : 'px-4 py-3 text-left'
            }`}
            title="Emby"
          >
            {isSidebarCollapsed ? '📺' : '📺 Emby'}
          </button>
          
          <button 
            className={`w-full rounded-lg bg-white/5 hover:bg-white/10 text-white/70 transition-colors ${
              isSidebarCollapsed ? 'flex items-center justify-center text-2xl leading-none h-12' : 'px-4 py-3 text-left'
            }`}
            title="CLion"
          >
            {isSidebarCollapsed ? '💻' : '💻 CLion'}
          </button>
          
          <button 
            className={`w-full rounded-lg bg-white/5 hover:bg-white/10 text-white/70 transition-colors ${
              isSidebarCollapsed ? 'flex items-center justify-center text-2xl leading-none h-12' : 'px-4 py-3 text-left'
            }`}
            title="Files"
          >
            {isSidebarCollapsed ? '📁' : '📁 Files'}
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        {isEmbyMaximized ? (
          /* Emby Window - Maximized */
          <div className="flex flex-col h-full w-full rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10">
            {/* Window Controls */}
            <div className="flex-shrink-0 bg-black/80 backdrop-blur-sm px-4 py-2 flex items-center justify-between border-b border-white/10">
              <span className="text-white font-medium">Emby Server</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsEmbyMaximized(false)}
                  className="px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-medium transition-colors"
                >
                  Minimize
                </button>
              </div>
            </div>

            {/* Iframe */}
            <div className="flex-1 min-h-0 w-full">
              <iframe
                src="https://95.211.191.82/unicorns/emby/web/index.html#!/home"
                className="w-full h-full border-0 block"
                title="Emby Server"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </div>
          </div>
        ) : (
          /* Hub View - When Emby is minimized */
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Welcome to Your Hub 🚀
              </h2>
              <p className="text-white/70 mb-8">
                Click a service in the sidebar to get started
              </p>
              
              {/* Minimized Window Preview */}
              <div 
                onClick={() => setIsEmbyMaximized(true)}
                className="inline-block p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 cursor-pointer transition-colors"
              >
                <div className="text-6xl mb-2">📺</div>
                <div className="text-white">Emby (Minimized)</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
