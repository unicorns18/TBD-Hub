import { useState } from 'react';
import { Tv, Code2, FolderOpen } from 'lucide-react';

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
        
        <nav className="flex flex-col gap-1 p-2">
          <button 
            onClick={() => setIsEmbyMaximized(!isEmbyMaximized)}
            className={`flex items-center rounded-lg min-h-11 transition-all duration-200
                        text-muted-foreground hover:text-accent-foreground
                        hover:bg-accent/50 hover:scale-[1.02]
                        data-[active=true]:bg-accent data-[active=true]:text-accent-foreground
                        data-[active=true]:border-l-2 data-[active=true]:border-primary ${
              isSidebarCollapsed 
                ? 'justify-center px-3 py-2.5' 
                : 'gap-3 px-3 py-2.5'
            }`}
            data-active={isEmbyMaximized}
            title="Emby"
          >
            <Tv className="size-5 shrink-0" />
            {!isSidebarCollapsed && <span className="font-medium">Emby</span>}
          </button>
          
          <button 
            className={`flex items-center rounded-lg min-h-11 transition-all duration-200
                        text-muted-foreground hover:text-accent-foreground
                        hover:bg-accent/50 hover:scale-[1.02]
                        data-[active=true]:bg-accent data-[active=true]:text-accent-foreground
                        data-[active=true]:border-l-2 data-[active=true]:border-primary ${
              isSidebarCollapsed 
                ? 'justify-center px-3 py-2.5' 
                : 'gap-3 px-3 py-2.5'
            }`}
            data-active={false}
            title="CLion"
          >
            <Code2 className="size-5 shrink-0" />
            {!isSidebarCollapsed && <span className="font-medium">CLion</span>}
          </button>
          
          <button 
            className={`flex items-center rounded-lg min-h-11 transition-all duration-200
                        text-muted-foreground hover:text-accent-foreground
                        hover:bg-accent/50 hover:scale-[1.02]
                        data-[active=true]:bg-accent data-[active=true]:text-accent-foreground
                        data-[active=true]:border-l-2 data-[active=true]:border-primary ${
              isSidebarCollapsed 
                ? 'justify-center px-3 py-2.5' 
                : 'gap-3 px-3 py-2.5'
            }`}
            data-active={false}
            title="Files"
          >
            <FolderOpen className="size-5 shrink-0" />
            {!isSidebarCollapsed && <span className="font-medium">Files</span>}
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
